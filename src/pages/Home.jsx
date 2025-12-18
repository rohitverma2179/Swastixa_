// import React from "react";
// import Hero from "../components/home/Hero";
// import HeroSection from "../components/home/FeaturedWork";
// import HomeAbout from "../components/home/HomeAbout";
// import ForthSection from "../components/home/ForthSection";
// // import CustomCursor from "../components/common/CustomCursor";
// import AnimationSection from "../components/home/HomeAbout";
// import EndToEndExcellence from "../components/home/EndToEndExcellence";
// import LogoCarousel from "../components/home/LogoSection";
// // import ThreeSection from "../components/home/ThreeSection";
// import ContactSection from "../components/home/ContactSection";
// import TorchlightTextReveal from "../components/home/MouseGlowText";
// import Particles from "../components/home/Particles";
// import Timeline from "../components/home/TimeLine";


// export default function Home() {
//   return (
//     <main>
//       <Hero />
//       <HeroSection />


//       <HomeAbout />
//       <EndToEndExcellence />
//       <ForthSection />
//     <LogoCarousel />
//       <TorchlightTextReveal />
//       <ContactSection />


//     </main>
//   );
// }



// import React from "react";
// // 1. All necessary imports from your original code block
// import Hero from "../components/home/Hero";
// import HeroSection from "../components/home/FeaturedWork";
// import HomeAbout from "../components/home/HomeAbout";
// import ForthSection from "../components/home/ForthSection";
// import AnimationSection from "../components/home/HomeAbout"; // Note: Importing HomeAbout twice
// import EndToEndExcellence from "../components/home/EndToEndExcellence";
// import LogoCarousel from "../components/home/LogoSection";
// import ContactSection from "../components/home/ContactSection";
// import TorchlightTextReveal from "../components/home/MouseGlowText";
// import Particles from "../components/home/Particles";
// import Timeline from "../components/home/TimeLine";

// // 2. Import Helmet from react-helmet
// import { Helmet } from 'react-helmet'; 

// // 3. Define the Schema Markup object (MUST be outside the function or defined once)
// const homeSchema = {
//   "@context": "https://schema.org",
//   "@type": "WebSite",
//   "name": "Swastixa Digital", // ⭐ This is the target Site Name
//   "alternateName": "Swastixa", 
//   "url": "https://www.swastixa.com/" // Ensure this URL is correct
// };


// // 4. The single, exported Home component
// export default function Home() {
//   return (
//     <main>
//         {/* === START: Schema Markup for Site Name (Helmet) === */}
//         <Helmet>
//           <script 
//             type="application/ld+json" 
//             dangerouslySetInnerHTML={{
//               __html: JSON.stringify(homeSchema)
//             }}
//           />
//         </Helmet>
//         {/* === END: Schema Markup for Site Name (Helmet) === */}

//         {/* 5. Your existing UI components (wrapped in <main>) */}
//         <Hero />
//         <HeroSection />
//         <HomeAbout />
//         <EndToEndExcellence />
//         <ForthSection />
//         <LogoCarousel />
//         <TorchlightTextReveal />
//         <ContactSection />
//     </main>
//   );
// }



import React from "react";
// Import Helmet to manage the <head> elements

// --- UI Component Imports ---
// (Ensure all these imports are correctly present at the top of your file)
import Hero from "../components/home/Hero";
import HeroSection from "../components/home/HeroSecond";
import HomeAbout from "../components/home/HomeAbout";
import ForthSection from "../components/home/HomeWork";
import EndToEndExcellence from "../components/home/EndToEndExcellence";
import LogoCarousel from "../components/home/Logo";
import ContactSection from "../components/common/Contact";
import TorchlightTextReveal from "../components/home/MouseGlowText";


// --- 1. WebSite Schema (For the Site Name) ---
// Note: I moved the 'logo' property out of here as it primarily belongs in Organization Schema for Google to use it in search results.
// const websiteSchema = {
//   "@context": "https://schema.org",
//   "@type": "WebSite",
//   "name": "Swastixa Digital", // Primary signal for the site name
//   "alternateName": "Swastixa", // If Google still recognizes the old name
//   "url": "https://www.swastixa.com/"
// };

// // --- 2. Organization Schema (For the Logo) ---
// // This is the correct object to define the logo for search results (Knowledge Panel/Site Name Logo).
// const organizationSchema = {
//   "@context": "https://schema.org",
//   "@type": "Organization",
//   "name": "Swastixa Digital",
//   "url": "https://www.swastixa.com/",
//   // ⭐ [Logo Change] Use the direct, public URL of your logo here.
//   "logo": "https://www.swastixa.com/public/Swastixa_favicon.png"
// };


//  {/* <Helmet>
//       {/* 1. Schema for Site Name (WebSite) */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(websiteSchema)
//         }}
//       />

//       {/* 2. Schema for Logo (Organization) */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(organizationSchema)
//         }}
//       />

//       {/* 3. Meta Tag for Description Change */}
//       <meta
//         name="description"
//         content="Swastixa Digital delivers 360° creative and digital marketing solutions including social media, branding, paid ads, video production, photoshoots, and design services to help brands grow with consistency and impact."
//       />

//       {/* Ensure your title also reflects the new name */}
//       <title>Swastixa Digital</title>

//     </Helmet>


export default function Home() {

  return (
    <main>





      {/* Your UI Components */}
      <Hero />
      <HeroSection />
      <HomeAbout />
      <EndToEndExcellence />
      <ForthSection />
      <LogoCarousel />
      <TorchlightTextReveal />
      <ContactSection />
      {/* You can add Particles and Timeline if you are using them */}
      {/* <Particles /> */}
      {/* <Timeline /> */}


    </main>
  );
}


