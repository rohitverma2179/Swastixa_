import { useEffect, useState } from "react";
import BlogGrid from "../components/blog/BlogGrid";
import BlogHeader from "../components/blog/BlogHeader";
import { blogs } from "../data/blogsData";

export default function BlogPage() {
  const [loading, setLoading] = useState(true);
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    // Simulate API delay
    setTimeout(() => {
      setBlogList(blogs);
      setLoading(false);
    }, 300);
  }, []);

  return (
    <>
      <div className="w-full   px-2 sm:px-4 md:px-20  lg:px-28 py-10 xl:px-36 bg-black">
        <BlogHeader />
        <BlogGrid blogs={blogList} loading={loading} />
      </div>
    </>
  );
}
