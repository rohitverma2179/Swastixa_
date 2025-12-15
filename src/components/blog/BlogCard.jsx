import { GlowingBorder } from "../common/GlowingBorder";

export default function BlogCard({ blog }) {

    return (
        <GlowingBorder
            // data-aos="zoom-out-down"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            containerClassName="shadow-md hover:shadow-2xl transition-all duration-300 bg-zinc-900"
            className="p-4 bg-zinc-800 !h-auto"
            borderRadius="0.8rem"
            // color="rgba(255, 255, 255, 0.4)"
            
        >

            {/* IMAGE SECTION */}
            <div
                className="
                    rounded-[0.3rem]
                    w-full 
                    h-[50vw]          /* Mobile */
                    sm:h-[40vw]        /* Small screens */
                    md:h-[30vw]        /* Tablets */
                    lg:h-[22vw]        /* Laptops */
                    xl:h-[18vh]        /* Large monitors */
                    2xl:h-[40vh]       /* Ultra wide screens */
                    max-h-[40rem]      /* hard safety cap */
                    overflow-hidden
                    
                "
            >
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover hover:scale-110 transition-all duration-300 "
                />
            </div>

            {/* TEXT SECTION */}
            <div className="p-[1.2rem]">
                {/* <p className="text-[0.85rem] text-gray-400 tracking-wide">
                    {blog.category}
                </p> */}

                {/* <h2 className="text-[1.25rem] font-semibold mt-[0.4rem] leading-snug">
                    {blog.title}
                </h2> */}

                <p className="text-[0.95rem] text-gray-300 mt-[0.6rem] 2xl:text-[1.3rem] line-clamp-2">
                    {blog.excerpt}
                </p>
            </div>
        </GlowingBorder>
    );
}
