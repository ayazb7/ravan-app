import React from "react";
import CardProp from "@/components/CardProp";

// Define the type for a property
interface Project {
  _id: string;
  status: string;
  bedrooms: string;
  startingPrice: number;
  delivery: string;
  developer: string;
  paymentPlan: string;
  projectProperties: string;
  project: string;
  photosUrl: string;
  // Add other fields as needed
}

// Define the type for the props
interface FilteredPropertiesProps {
  initialProperties: Project[];
}

const FilteredProperties: React.FC<FilteredPropertiesProps> = ({
  initialProperties,
}) => {
  if (!initialProperties.length) {
    return <p>No commercial properties found.</p>;
  }

  return (
    <div className="my-10 w-[75vw] flex-col items-center justify-center">
      <h2 className="mb-10 text-center text-white text-5xl font-semibold ">
        Properties
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-14 gap-y-10">
        {initialProperties.map((project) => (
          <CardProp
            key={project._id}
            status={project.status}
            bedrooms={project.bedrooms}
            price={project.startingPrice}
            delivery={project.delivery}
            developer={project.developer}
            paymentPlan={project.paymentPlan}
            propertyType={project.projectProperties}
            project={project.project}
            photoUrl={project.photosUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default FilteredProperties;
