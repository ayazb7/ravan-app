"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AddPropertyForm = () => {
  const router = useRouter();

  const startingPropertyData = {
    type: "",
    status: "",
    bedrooms: "",
    price: "",
    property: "",
    photoUrl: "",
  };

  const [formData, setFormData] = useState(startingPropertyData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });
      if (!res.ok) {
        throw new Error("Failed to create property");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.error("Error creating property:", error);
    }
  };

  const propertyTypes = ["Commercial", "Residential", "Industrial", "Land"];
  const statuses = ["For Sale", "For Rent", "Sold"];

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        method="post"
        className="flex flex-col gap-3 w-1/2"
      >
        <h3>Create New Property</h3>

        <label>Type</label>
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
        >
          {propertyTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>

        <label>Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
        >
          {statuses.map((status, index) => (
            <option key={index} value={status}>
              {status}
            </option>
          ))}
        </select>

        <label>Bedrooms</label>
        <input
          id="bedrooms"
          name="bedrooms"
          type="number"
          min="0"
          onChange={handleChange}
          required
          value={formData.bedrooms}
        />

        <label>Price</label>
        <input
          id="price"
          name="price"
          type="text"
          onChange={handleChange}
          required
          value={formData.price}
        />

        <label>Photo URL</label>
        <input
          id="photoUrl"
          name="photoUrl"
          type="text"
          onChange={handleChange}
          value={formData.photoUrl}
        />

        <input type="submit" className="btn max-w-xs" value="Create Property" />
      </form>
    </div>
  );
};

export default AddPropertyForm;
