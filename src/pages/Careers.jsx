import React from "react";
// import CareersHero from "../components/careers/CareersHero";
import ContactCareer from "../components/careers/ContactCareer";
import CareersHero from "../components/careers/careersHero";

export default function Careers() {
  return (
    <div className="bg-black min-h-screen pt-20">
      <CareersHero />
      <ContactCareer />
    </div>
  );
}
