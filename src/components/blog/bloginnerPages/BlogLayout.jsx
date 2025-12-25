// import BlogHero from "./BlogHero";
// import BlogContent from "./BlogContent";

// export default function BlogLayout({ blog }) {
//   return (
//     <section className="min-h-screen bg-black text-white px-4 md:px-16 py-12">
//       <BlogHero hero={blog.hero} />

//       <div className="grid md:grid-cols-3 gap-10 mt-12">
//         <div className="md:col-span-2">
//           <BlogContent content={blog.content} />
//         </div>

//         <aside className="hidden md:block">
//           <div className="sticky top-20">
//             <p className="text-gray-400">
//               Related Blogs / Ads / CTA
//             </p>
//           </div>
//         </aside>
//       </div>
//     </section>
//   );
// }



import BlogHero from "./BlogHero";
<<<<<<< HEAD
<<<<<<< HEAD
import BlogContent from "./BlogContent"; 
=======
import BlogContent from "./BlogContent";
import FAQ from "../../faq/FAQ";
>>>>>>> 648cf52d930bbe32c24f72d4a94a085f88032165
=======
import BlogContent from "./BlogContent";
import FAQ from "../../faq/FAQ";
>>>>>>> 648cf52d930bbe32c24f72d4a94a085f88032165

export default function BlogLayout({ blog }) {
  return (
    <section className="min-h-screen  bg-black text-white px-4 md:px-16 py-12">
      <BlogHero hero={blog.hero} />

      <div className="grid md:grid-cols-0 max-w-[1200px] mx-auto gap-10 mt-12">
        <div className="md:col-span-2">
          <BlogContent content={blog.content} />
        </div>

        {/* <aside className="hidden md:block">
          <div className="sticky top-20 text-gray-400">
            Related Blogs / CTA / Ads
          </div>
        </aside> */}
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 648cf52d930bbe32c24f72d4a94a085f88032165
      {/* FAQ Section (Auto Render if Exists) */}
      {blog.faq && blog.faq.length > 0 && (
        <FAQ faqs={blog.faq} />
      )}
<<<<<<< HEAD
>>>>>>> 648cf52d930bbe32c24f72d4a94a085f88032165
=======
>>>>>>> 648cf52d930bbe32c24f72d4a94a085f88032165
    </section>
  );
}
