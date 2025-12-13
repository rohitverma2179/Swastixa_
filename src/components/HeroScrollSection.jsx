import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroScrollSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="w-full flex flex-col md:flex-row justify-between items-start px-10 py-20 bg-white">
      {/* Left Section */}
      <div className="md:w-1/2 w-full mb-10 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black">
          Imagineers of <br />
          <span className="block mt-2">Digital Behaviour +</span>
          <span className="block mt-2">
            Immersive{" "}
            <span className="text-blue-700">Experience</span>
          </span>
        </h1>
      </div>

      {/* Right Section (Expandable Text) */}
      <div className="md:w-1/2 w-full bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden transition-all duration-700 ease-in-out">
        <motion.div
          animate={{
            height: expanded ? "auto" : "200px",
          }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <h2 className="text-2xl font-semibold mb-4 text-black">
            Scrolling Gradient
          </h2>
          <p className="text-gray-800 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            tincidunt augue id sapien mattis, nec fermentum metus eleifend.
            Pellentesque nec nulla a lectus efficitur ultricies. Mauris tempor
            imperdiet lacus, nec laoreet libero blandit at. Duis vitae orci
            interdum, porttitor neque nec, laoreet arcu. Curabitur ullamcorper
            dolor vitae eros dignissim, vel volutpat lacus tincidunt. Cras nec
            justo sed nunc dignissim faucibus. Nunc ac suscipit justo. Vestibulum
            sodales, est eget pretium facilisis, ligula urna porta risus, nec
            tempor sem elit vel libero. Morbi a felis arcu. Proin viverra justo
            vitae enim tristique, eget pharetra justo facilisis. Integer ut mi in
            lorem egestas porta in sit amet tortor. Aenean sit amet mauris
            facilisis, tincidunt nunc sed, faucibus nunc. Curabitur sodales vel
            arcu ut tempor. Sed non cursus nunc, sed ullamcorper nisi. Sed
            rhoncus, justo in cursus luctus, neque orci pulvinar nunc, sit amet
            viverra ipsum nulla non magna. Integer bibendum finibus sapien at
            malesuada.
          </p>
        </motion.div>

        {/* Fade Gradient at Bottom */}
        {!expanded && (
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white via-white/80 to-transparent flex justify-center items-end pb-3">
            <button
              onClick={() => setExpanded(true)}
              className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition"
            >
              ...
            </button>
          </div>
        )}

        {/* Collapse Button */}
        {expanded && (
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setExpanded(false)}
              className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition"
            >
              Show Less ▲
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
