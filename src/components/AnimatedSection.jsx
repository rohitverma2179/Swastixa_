import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedSection() {
  useEffect(() => {
    // === LENIS Smooth Scroll Setup ===
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // === GSAP Scroll Animations ===
    const getScrollDistance = () => {
      if (window.innerWidth <= 480) return "+=250%";
      if (window.innerWidth <= 1024) return "+=320%";
      return "+=400%";
    };

    const setupAnimations = () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".aniamtion-section",
          start: "top top",
          end: getScrollDistance(),
          scrub: 2,
          pin: true,
          markers: false,
          invalidateOnRefresh: true,
        },
      });

      tl.to(".firt", {
        marginTop: "-350%",
        ease: "none",
      });

      document.querySelectorAll(".right img").forEach((img) => {
        gsap.fromTo(
          img,
          { scale: 0.6 },
          {
            scale: 1,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: img,
              start: "top 85%",
              end: "bottom 15%",
              scrub: true,
              markers: false,
              onUpdate: (self) => {
                const progress = self.progress;
                const scaleValue = 0.6 + Math.sin(progress * Math.PI) * 0.4;
                gsap.to(img, {
                  scale: scaleValue,
                  duration: 0.3,
                  ease: "power2.out",
                  overwrite: "auto",
                });
              },
            },
          }
        );
      });
    };

    setupAnimations();
    window.addEventListener("resize", () => {
      ScrollTrigger.refresh();
      setupAnimations();
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      lenis.destroy();
    };
  }, []);

  return (
    <div className="overflow-x-hidden font-[Poppins] bg-black text-white">
      {/* === Animation Section === */}
      <section className="aniamtion-section w-full h-[100vh] flex bg-[url('https://res.cloudinary.com/demo/image/upload/v1700000000/sample.jpg')] bg-cover bg-center relative">
        {/* LEFT (Sticky About Section) */}
        <div className="left w-[35%] flex justify-center items-start pt-20 pl-10 sticky top-0 h-screen">
          <div className="left-para w-[90%] border border-white/40 rounded-2xl backdrop-blur-lg p-8 text-left bg-white/10 shadow-lg">
            <h1 className="text-[clamp(2.5rem,5vw,6rem)] font-semibold leading-tight">
              About us
            </h1>
            <p className="text-gray-200 text-[clamp(1rem,2vw,1.2rem)] leading-relaxed mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
              voluptas eveniet iure at nihil reiciendis voluptatibus voluptates
              recusandae? Incidunt doloribus sapiente officia asperiores facere
              quia quidem molestias exercitationem beatae dolorum.
            </p>
          </div>
        </div>

        {/* RIGHT (Scroll Image Animation Section) */}
        <div className="right w-[65%] relative flex flex-col gap-[20rem] pt-[30%] overflow-hidden">
          {[
            "https://i.pinimg.com/originals/b5/03/bf/b503bf56eb822bd27ced62354be24f1d.jpg",
            "https://inspgr.id/app/uploads/2020/06/illustration-dave-arcade-01.jpg",
            "https://wallpapers.com/images/featured/cool-art-omrsd0ip619jtven.jpg",
            "https://i.pinimg.com/originals/b5/03/bf/b503bf56eb822bd27ced62354be24f1d.jpg",
          ].map((src, i) => (
            <div
              key={i}
              className={`first-video ${i === 0 ? "firt" : ""} w-full h-[80vh]`}
            >
              <img
                src={src}
                alt={`slide-${i}`}
                className="w-full h-full object-cover rounded-xl transition-transform duration-300 ease-out"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
