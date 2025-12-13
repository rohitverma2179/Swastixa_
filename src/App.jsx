// import React, { useState } from "react";
// import { Routes, Route } from "react-router-dom";

// // === Layout Components === //
// import Header from "./components/common/Header";
// import Footer from "./components/common/Footer";

// // === Page Components ===
// import Home from "./pages/Home";
// import Work from "./pages/Work";
// import Awards from "./pages/Awards";
// import Careers from "./pages/Careers";
// import Blog from "./pages/Blog";
// import Contact from "./pages/Contact";
// import About from "./pages/About"; // you have this too
// import "./App.css";
// import { video } from "framer-motion/client";

// export default function App() {

//   return (
//     <>
//       <Header />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/work" element={<Work />} />
//         <Route path="/awards" element={<Awards />} />
//         <Route path="/careers" element={<Careers />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/about" element={<About />} />
//       </Routes>

//       <Footer />
//     </>
//   );
// }



import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// Layout
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

// Pages
import Home from "./pages/Home";
import Work from "./pages/Work";
import Awards from "./pages/Awards";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

import "./App.css";
import CustomCursor from "./components/common/CustomCursor";
import CommingSoon from "./components/common/CommingSoon";
import { Audio } from "react-loader-spinner";
import HomeAbout from "./components/home/HomeAbout";
import About from "./pages/About";
// import CustomCursor from "./components/common/CustomCursor";

export default function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    // Loader 2.5 sec ke liye show hoga
    const timer = setTimeout(() => {
      setLoader(false);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  // 👉 If loader true → show loader only
  if (loader) {
    return (
      <div className="fixed inset-0 w-full h-full overflow-hidden m-0 p-0">
        <video
          src="https://swastixa.b-cdn.net/Landing--page----S%20logo.mp4 "
          className="absolute inset-0 w-full h-full object-cover m-0 p-0"
          autoPlay
          muted
          loop
          playsInline
        ></video>
      </div>
    );
  }



  // 👉 After loader finished → show website
  return (
    <>
      <Header />
      {/* <CustomCursor /> */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        </Routes> */}


      {/* comming soon page  */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/awards" element={<CommingSoon />} />
        <Route path="/careers" element={<CommingSoon />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<CommingSoon />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}