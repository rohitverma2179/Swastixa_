// "use client";
// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Lenis from "lenis";

// gsap.registerPlugin(ScrollTrigger);

// const cardData = [
//     {
//         id: 1,
//         title: "Software Engineer",
//         description: "Building robust and scalable applications for the future.",
//         image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000"
//     },
//     {
//         id: 2,
//         title: "Product Manager",
//         description: "Driving product vision and strategy to success.",
//         image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000"
//     },
//     {
//         id: 3,
//         title: "UX Designer",
//         description: "Crafting intuitive and user-centered digital experiences.",
//         image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1000"
//     },
//     {
//         id: 4,
//         title: "Data Scientist",
//         description: "Uncovering insights from data to solve complex problems.",
//         image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
//     },
//     {
//         id: 5,
//         title: "DevOps Engineer",
//         description: "Streamlining deployment and operations for maximum efficiency.",
//         image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=1000"
//     },
// ];

// export default function ScrollStac() {
//     const containerRef = useRef(null);
//     const cardsRef = useRef([]);

//     useEffect(() => {
//         const lenis = new Lenis({
//             smooth: true,
//             duration: 1.2, // Smoother scroll
//         });

//         function raf(time) {
//             lenis.raf(time);
//             requestAnimationFrame(raf);
//         }
//         requestAnimationFrame(raf);

//         // Clean up old triggers
//         ScrollTrigger.getAll().forEach(t => t.kill());

//         const cards = cardsRef.current;

//         cards.forEach((card, i) => {
//             if (!card || i === cards.length - 1) return; // Last card doesn't need to scale away

//             const nextCard = cards[i + 1];

//             // Animate the CURRENT card (i) based on the NEXT card's (i+1) position
//             gsap.to(card, {
//                 scale: 0.9, // Scale down to 90%
//                 opacity: 1, // Keep opacity full or reduce slightly if desired
//                 filter: "brightness(0.6)", // Dim the card behind
//                 ease: "none",
//                 scrollTrigger: {
//                     trigger: nextCard,
//                     start: "top bottom", // When next card enters viewport bottom
//                     end: "top 20%",     // When next card overlaps the stack area (approx)
//                     scrub: true,
//                 }
//             });
//         });

//         return () => {
//             lenis.destroy();
//             ScrollTrigger.getAll().forEach(t => t.kill());
//         };
//     }, []);

//     return (
//         <section ref={containerRef} className="min-h-screen   font-mono py-20 pb-[20vh]">
//             <div className="w-full flex flex-col items-center gap-10">
//                 <h1 className="text-4xl md:text-6xl font-bold  mb-10 text-center  z-0">
//                     Where Ideas Flow, Brands Grow <br />
//                     A digital-first company shaping brands through creativity, culture, and clarity.
//                 </h1>
//                 <h2>Swastixa Digital is a full-service digital company rooted in Indian values and modern thinking. <br />
//                     We blend strategy, design, and technology to build brands that move people and markets.
//                 </h2>

//                 <div className="w-full flex flex-col items-center">
//                     {cardData.map((item, i) => (
//                         <div
//                             key={item.id}
//                             ref={(el) => (cardsRef.current[i] = el)}
//                             className="card sticky w-[90vw] max-w-[1000px] h-[500px] md:h-[450px]
//                             flex flex-col-reverse md:flex-row overflow-hidden
//                             bg-[#1a1a1a] rounded-[1.5rem] md:rounded-[2rem] border border-gray-100
//                             shadow-2xl
//                             origin-top transition-shadow text-white"
//                             style={{
//                                 // Stagger the stickiness so they stack with a slight offset
//                                 top: `calc(10% + ${i * 10}px)`,
//                                 zIndex: i + 1,
//                                 marginBottom: "40vh", // Adds scrolling space between cards
//                             }}
//                         >
//                             {/* Left Content (Bottom on mobile) */}
//                             <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center gap-2 md:gap-4 h-1/2 md:h-full">
//                                 {/* <span className="text-xs md:text-base font-semibold text-gray-400 uppercase tracking-widest">
//                                     {item.id.toString().padStart(2, '0')}
//                                 </span> */}
//                                 <h2 className="text-xl md:text-4xl font-bold leading-tight">
//                                     {item.title}
//                                 </h2>
//                                 <p className="text-xs md:text-lg text-gray-300 line-clamp-3 md:line-clamp-none">
//                                     {item.description}
//                                 </p>
//                             </div>

//                             {/* Right Image (Top on mobile) */}
//                             <div className="w-full md:w-1/2 h-1/2 md:h-full">
//                                 <img
//                                     src={item.image}
//                                     alt={item.title}
//                                     className="w-full h-full object-cover"
//                                 />
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }




// "use client";
// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Lenis from "lenis";

// gsap.registerPlugin(ScrollTrigger);

// const cardData = [
//   {
//     id: 1,
//     title: "Software Engineer",
//     description: "Building robust and scalable applications for the future.",
//     image:
//       "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000",
//   },
//   {
//     id: 2,
//     title: "Product Manager",
//     description: "Driving product vision and strategy to success.",
//     image:
//       "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000",
//   },
//   {
//     id: 3,
//     title: "UX Designer",
//     description: "Crafting intuitive and user-centered digital experiences.",
//     image:
//       "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1000",
//   },
//   {
//     id: 4,
//     title: "Data Scientist",
//     description: "Uncovering insights from data to solve complex problems.",
//     image:
//       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
//   },
//   {
//     id: 5,
//     title: "DevOps Engineer",
//     description: "Streamlining deployment and operations for maximum efficiency.",
//     image:
//       "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=1000",
//   },
// ];

// export default function ScrollStack() {
//   const cardsRef = useRef([]);

//   useEffect(() => {
//     /* ---------------- LENIS ---------------- */
//     const lenis = new Lenis({
//       smooth: true,
//       duration: 1.2,
//     });

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }
//     requestAnimationFrame(raf);

//     /* ---------------- RESET OLD TRIGGERS ---------------- */
//     ScrollTrigger.getAll().forEach((t) => t.kill());

//     const cards = cardsRef.current;

//     /* ---------------- INITIAL STATE ---------------- */
//     gsap.set(cards, {
//       x: -200,          // start from LEFT
//       opacity: 0,       // hidden
//     });

//     /* ---------------- ANIMATIONS ---------------- */
//     cards.forEach((card, i) => {
//       if (!card) return;

//       /* ENTRY ANIMATION (Bottom → Left → Center) */
//       gsap.to(card, {
//         x: 0,
//         opacity: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: card,
//           start: "top bottom", // start when coming from bottom
//           end: "top center",
//           scrub: true,
//         },
//       });

//       /* STACK SCALE ANIMATION */
//       if (i === cards.length - 1) return;

//       const nextCard = cards[i + 1];

//       gsap.to(card, {
//         scale: 0.9,
//         filter: "brightness(0.6)",
//         ease: "none",
//         scrollTrigger: {
//           trigger: nextCard,
//           start: "top bottom",
//           end: "top 20%",
//           scrub: true,
//         },
//       });
//     });

//     return () => {
//       lenis.destroy();
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, []);

//   return (
//     <section className="min-h-screen py-20 pb-[20vh] font-mono">
//       <div className="w-full flex flex-col items-center gap-10">
//         <h1 className="text-4xl md:text-6xl font-bold text-center">
//           Where Ideas Flow, Brands Grow
//         </h1>

//         <h2 className="text-center text-gray-500 max-w-3xl">
//           Swastixa Digital is a full-service digital company rooted in Indian
//           values and modern thinking.
//         </h2>

//         <div className="w-full flex flex-col items-center">
//           {cardData.map((item, i) => (
//             <div
//               key={item.id}
//               ref={(el) => (cardsRef.current[i] = el)}
//               className="
//                 sticky
//                 w-[90vw] max-w-[1000px]
//                 h-[500px] md:h-[450px]
//                 flex flex-col-reverse md:flex-row
//                 bg-[#1a1a1a] text-white
//                 rounded-[1.5rem] md:rounded-[2rem]
//                 shadow-2xl
//                 overflow-hidden
//                 origin-top
//               "
//               style={{
//                 top: `calc(10% + ${i * 10}px)`,
//                 zIndex: i + 1,
//                 marginBottom: "40vh",
//               }}
//             >
//               {/* TEXT */}
//               <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center gap-4">
//                 <h3 className="text-xl md:text-4xl font-bold">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-300 text-sm md:text-lg">
//                   {item.description}
//                 </p>
//               </div>

//               {/* IMAGE */}
//               <div className="w-full md:w-1/2 h-1/2 md:h-full">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PremiumGsap = () => {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ===============================
         1️⃣ PAGE LOAD → SPLIT TEXT
      ================================ */
      const title = document.querySelector(".split-text");
      title.innerHTML = title.textContent
        .split("")
        .map(char => `<span>${char === " " ? "&nbsp;" : char}</span>`)
        .join("");

      gsap.from(".split-text span", {
        y: 120,
        opacity: 0,
        skewY: 10,
        duration: 1.2,
        stagger: 0.05,
        ease: "power4.out"
      });

      gsap.from(".reveal", {
        opacity: 0,
        y: 60,
        delay: 0.5,
        duration: 1,
        ease: "power3.out"
      });

      /* ===============================
         2️⃣ SCROLL → 3D + SCRUB
      ================================ */
      gsap.utils.toArray(".scroll-card").forEach(card => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 40%",
            scrub: true
          },
          y: 150,
          rotateX: 25,
          scale: 0.9,
          opacity: 0
        });
      });

      /* ===============================
         3️⃣ MAGNETIC BUTTON
      ================================ */
      document.querySelectorAll(".magnet").forEach(btn => {
        const move = e => {
          const rect = btn.getBoundingClientRect();
          gsap.to(btn, {
            x: (e.clientX - rect.left - rect.width / 2) * 0.3,
            y: (e.clientY - rect.top - rect.height / 2) * 0.3,
            duration: 0.3,
            ease: "power3.out"
          });
        };

        const reset = () => {
          gsap.to(btn, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.4)"
          });
        };

        btn.addEventListener("mousemove", move);
        btn.addEventListener("mouseleave", reset);
      });

      /* ===============================
         4️⃣ IMAGE → MASK REVEAL
      ================================ */
      gsap.to(".img-reveal", {
        clipPath: "inset(0 0% 0 0)",
        duration: 1.4,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".img-reveal",
          start: "top 80%"
        }
      });

    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="bg-black text-white">

      {/* HERO */}
      <div className="min-h-screen flex flex-col justify-center items-center gap-6 text-center">
        <h1 className="split-text text-5xl md:text-7xl font-bold">
          Digital Growth Agency
        </h1>
        <p className="reveal text-lg opacity-80">
          We build premium animated web experiences
        </p>
        <button className="magnet bg-white text-black px-10 py-4 rounded-full font-semibold">
          Explore More
        </button>
      </div>

      {/* SPACER */}
      <div className="h-screen" />

      {/* CARDS */}
      <div className="flex flex-col items-center gap-10">
        {["Creative Design", "Web Development", "Digital Marketing"].map(
          (item, i) => (
            <div
              key={i}
              className="scroll-card w-[70%] p-16 bg-zinc-900 rounded-[30px] text-2xl text-center"
            >
              {item}
            </div>
          )
        )}
      </div>

      {/* SPACER */}
      <div className="h-screen" />

      {/* IMAGE */}
      <div className="p-20">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          alt="Reveal"
          className="img-reveal w-full rounded-[30px]"
        />
      </div>

    </section>
  );
};

export default PremiumGsap;