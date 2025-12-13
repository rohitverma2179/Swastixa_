"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const cardData = [
    {
        id: 1,
        title: "Software Engineer",
        description: "Building robust and scalable applications for the future.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 2,
        title: "Product Manager",
        description: "Driving product vision and strategy to success.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 3,
        title: "UX Designer",
        description: "Crafting intuitive and user-centered digital experiences.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 4,
        title: "Data Scientist",
        description: "Uncovering insights from data to solve complex problems.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 5,
        title: "DevOps Engineer",
        description: "Streamlining deployment and operations for maximum efficiency.",
        image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=1000"
    },
];

export default function ScrollStac() {
    const containerRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const lenis = new Lenis({
            smooth: true,
            duration: 1.2, // Smoother scroll
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Clean up old triggers
        ScrollTrigger.getAll().forEach(t => t.kill());

        const cards = cardsRef.current;

        cards.forEach((card, i) => {
            if (!card || i === cards.length - 1) return; // Last card doesn't need to scale away

            const nextCard = cards[i + 1];

            // Animate the CURRENT card (i) based on the NEXT card's (i+1) position
            gsap.to(card, {
                scale: 0.9, // Scale down to 90%
                opacity: 1, // Keep opacity full or reduce slightly if desired
                filter: "brightness(0.6)", // Dim the card behind
                ease: "none",
                scrollTrigger: {
                    trigger: nextCard,
                    start: "top bottom", // When next card enters viewport bottom
                    end: "top 20%",     // When next card overlaps the stack area (approx)
                    scrub: true,
                }
            });
        });

        return () => {
            lenis.destroy();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <section ref={containerRef} className="min-h-screen  bg-[#f1efe5] font-mono py-20 pb-[20vh]">
            <div className="w-full flex flex-col items-center gap-10">
                <h1 className="text-4xl md:text-6xl font-bold  text-[#274E5F] mb-10 text-center  z-0">
                    Lorem ipsum dolor.
                </h1>

                <div className="w-full flex flex-col items-center">
                    {cardData.map((item, i) => (
                        <div
                            key={item.id}
                            ref={(el) => (cardsRef.current[i] = el)}
                            className="card sticky w-[90vw] max-w-[1000px] h-[500px] md:h-[450px]
                            flex flex-col-reverse md:flex-row overflow-hidden
                            bg-[#1a1a1a] rounded-[1.5rem] md:rounded-[2rem] border border-gray-100
                            shadow-2xl
                            origin-top transition-shadow text-white"
                            style={{
                                // Stagger the stickiness so they stack with a slight offset
                                top: `calc(10% + ${i * 10}px)`,
                                zIndex: i + 1,
                                marginBottom: "40vh", // Adds scrolling space between cards
                            }}
                        >
                            {/* Left Content (Bottom on mobile) */}
                            <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center gap-2 md:gap-4 h-1/2 md:h-full">
                                {/* <span className="text-xs md:text-base font-semibold text-gray-400 uppercase tracking-widest">
                                    {item.id.toString().padStart(2, '0')}
                                </span> */}
                                <h2 className="text-xl md:text-4xl font-bold leading-tight">
                                    {item.title}
                                </h2>
                                <p className="text-xs md:text-lg text-gray-300 line-clamp-3 md:line-clamp-none">
                                    {item.description}
                                </p>
                            </div>

                            {/* Right Image (Top on mobile) */}
                            <div className="w-full md:w-1/2 h-1/2 md:h-full">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
