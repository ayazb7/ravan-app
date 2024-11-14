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
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { AnimatePresence, motion } from "framer-motion";
import MySVG from "@/logos/menu.svg";
import MyCloseSVG from "@/logos/close.svg";
import "@/app/globals.css";

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

const customStyles: StylesConfig<CurrencyOption> = {
  // Your existing styles for react-select
};

const NavBar: React.FC = () => {
  const { currency, setCurrency } = useCurrency();
  const [selectedLang, setSelectedLang] = useState("EN");
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

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
  const linkHoverEffectStyle = cva(
    "group text-lg font-semibold inline-flex h-10 items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleCurrencyChange = (option: SingleValue<CurrencyOption>) => {
    if (option) setCurrency(option.value); // Handle SingleValue
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageChange = (lang: string) => {
    setSelectedLang(lang);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`bg-black justify-between items-center p-6 transition-shadow duration-300 ${
          scrolled ? "shadow-md" : ""
        } fixed w-full top-0 left-0 z-50 hidden md:flex`}
      >
        <div className="flex items-center cursor-pointer">
          <Link href={"/"}>
            <Image src={logo} alt="Highend logo" height={80} width={80} />
          </Link>
        </div>
        <div className="flex justify-center gap-x-12 items-center text-white h-full">
          <Link href="/" className={cn(linkHoverEffectStyle())}>
            <p className="text-lg font-semibold">Home</p>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <p className="text-lg font-semibold">Projects</p>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <Link href="/offplan" passHref>
                    <NavigationMenuLink className="hover-effect2">
                      Off Plan
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/commercial" passHref>
                    <NavigationMenuLink className="hover-effect2">
                      Commercial
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/residential" passHref>
                    <NavigationMenuLink className="hover-effect2">
                      Residential
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/developers" passHref>
                    <NavigationMenuLink className="hover-effect2">
                      Developers
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuViewport />
            <NavigationMenuIndicator />
          </NavigationMenu>
          <Link href="/contact" className={cn(linkHoverEffectStyle())}>
            <p className="text-lg font-semibold">Contact Us</p>
          </Link>
        </div>
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
                  height={20}
                  width={20}
                />
                <span className="ml-2">{option.label}</span>
              </div>
            )}
          />
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav
        className={`bg-black justify-between items-center p-4 transition-shadow duration-300 ${
          scrolled ? "shadow-md" : ""
        } fixed w-full top-0 left-0 z-50 flex md:hidden`}
      >
        <div
          className="flex items-center cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Link href="/">
            <Image src={logo} alt="Highend logo" height={86} width={65} />
          </Link>
        </div>
        <div
          onClick={() => {
            setIsClicked((prevState) => !prevState);
            handleMenuToggle();
          }}
        >
          <Image
            src={isClicked ? MyCloseSVG : MySVG}
            alt="Menu Icon"
            className={`menu-mobile-only ${
              isClicked ? "clicked" : ""
            } w-[39px]`}
          />
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="burger-menu"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="items-end"
                onClick={() => {
                  setIsClicked((prevState) => !prevState);
                  handleMenuToggle();
                }}
              >
                <Image
                  src={MyCloseSVG}
                  alt="Close Icon"
                  className={`menu-mobile-only-close ${
                    isClicked ? "clicked" : ""
                  } w-[39px] h-[50px] mt-10 ml-40`}
                />
              </div>
              <Link
                href="/en/markets"
                className="text-my_blue font-semibold"
                onClick={handleMenuToggle}
              >
                Markets
              </Link>
              <Link
                href="/en/#services"
                className="text-my_blue font-semibold"
                onClick={handleMenuToggle}
              >
                Services
              </Link>
              <Link
                href="/en/about"
                className="text-my_blue font-semibold"
                onClick={handleMenuToggle}
              >
                About
              </Link>
              <button
                className={`button-18 ${
                  selectedLang === "EN" ? "selected" : ""
                } button-mobile`}
                onClick={() => handleLanguageChange("EN")}
              >
                EN
              </button>
              <button
                className={`button-18 button-switch ${
                  selectedLang === "AR" ? "selected" : ""
                } button-mobile`}
                onClick={() => handleLanguageChange("AR")}
              >
                AR
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default NavBar;
