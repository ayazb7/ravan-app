"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/logos/logo.png";
import Link from "next/link";
import Select, { SingleValue, StylesConfig } from "react-select";
import { CircleFlag } from "next-circle-flags";
import { cva } from "class-variance-authority";
import { useCurrency } from "../context/currencyContext";
import { cn } from "@/lib/utils"; // Adjust the path according to your project structure

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"; // Assuming this is the path where the NavigationMenu components are stored

// Define the type for currency options
interface CurrencyOption {
  value: string;
  label: string;
  countryCode: string;
}

const currencyOptions: CurrencyOption[] = [
  { value: "AED", label: "AED", countryCode: "ae" },
  { value: "USD", label: "USD", countryCode: "us" },
  { value: "GBP", label: "GBP", countryCode: "gb" },
  { value: "EUR", label: "EUR", countryCode: "eu" },
];

// Inline styles using react-select's `styles` prop
const customStyles: StylesConfig<CurrencyOption> = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "white",
    borderRadius: "30px", // Rounder edges
    border: "none",
    boxShadow: state.isFocused ? "none" : "0px 4px 10px rgba(0, 0, 0, 0.1)",
    padding: "5px 10px",
    width: "145px",
    minHeight: "40px",
  }),
  singleValue: (provided) => ({
    ...provided,
    display: "flex",
    alignItems: "center",
    color: "black", // Ensure the label text is visible
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "12px", // Rounder corners for the dropdown
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
    overflow: "hidden", // Prevent corners from sticking out
  }),
  option: (provided, state) => ({
    ...provided,
    display: "flex",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: state.isSelected ? "#2A2A2A" : "white",
    color: state.isSelected ? "white" : "#2A2A2A", // Text color of non-selected options
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.1)", // Hover or focus background
    },
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "black", // Dropdown arrow color
  }),
};

const NavBar: React.FC = () => {
  const { currency, setCurrency } = useCurrency();
  const [selectedLang, setSelectedLang] = useState("EN");
  const [scrolled, setScrolled] = useState(false);
  const linkHoverEffectStyle = cva(
    "group text-lg font-semibold inline-flex h-10 items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
  );

  // Handle SingleValue in onChange
  const handleCurrencyChange = (option: SingleValue<CurrencyOption>) => {
    if (option) setCurrency(option.value); // Handle SingleValue
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`bg-black justify-between items-center p-6 transition-shadow duration-300 ${
          scrolled ? "shadow-md" : ""
        } fixed w-full top-0 left-0 z-50 hidden md:flex`}
      >
        <div className="flex items-center cursor-pointer">
          <Link href={"/"}>
            <Image src={logo} alt="Highend logo" height={70} width={70} />{" "}
          </Link>
          {/* Adjust the logo size */}
        </div>
        <div className="flex justify-center items-center text-my_blue h-full">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <p className="text-lg font-semibold">Residential</p>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  {/* Wrap the NavigationMenuLink inside Link */}
                  <Link href="/" passHref>
                    <NavigationMenuLink>To Buy</NavigationMenuLink>
                  </Link>
                  <Link href="/" passHref>
                    <NavigationMenuLink>For Sale</NavigationMenuLink>
                  </Link>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <p className="text-lg font-semibold">Commercial</p>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  {/* Wrap the NavigationMenuLink inside Link */}
                  <Link href="/" passHref>
                    <NavigationMenuLink>To Buy</NavigationMenuLink>
                  </Link>
                  <Link href="/" passHref>
                    <NavigationMenuLink>For Sale</NavigationMenuLink>
                  </Link>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuViewport />
            <NavigationMenuIndicator />
          </NavigationMenu>

          <Link href="/en/about" className={cn(linkHoverEffectStyle())}>
            <p className="text-lg font-semibold">Communities</p>
          </Link>
          <Link href="/en/about" className={cn(linkHoverEffectStyle())}>
            <p className="text-lg font-semibold">Off Plan</p>
          </Link>
          <Link href="/en/about" className={cn(linkHoverEffectStyle())}>
            <p className="text-lg font-semibold">Contact</p>
          </Link>
        </div>

        {/* Currency Selector Button */}
        <div className="flex items-center">
          <Select
            isMulti={false}
            value={currencyOptions.find((option) => option.value === currency)}
            onChange={handleCurrencyChange}
            options={currencyOptions}
            isSearchable={false}
            styles={customStyles}
            formatOptionLabel={(option: CurrencyOption) => (
              <div className="flex items-center">
                <CircleFlag
                  countryCode={option.countryCode}
                  height={24}
                  width={24}
                />
                <span className="ml-2">{option.label}</span>
              </div>
            )}
          />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
