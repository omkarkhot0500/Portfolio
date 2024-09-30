
import { PROFILE } from "../constants";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative flex min-h-screen items-end justify-center mt-[-300px]" id="hero" >
      <motion.div 
        className="z-20 mx-4 max-w-3xl pb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <h1 className="text-5xl font-semibold uppercase tracking-wide md:text-7xl">
        <a
                href="https://github.com/omkarkhot0500"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
          Omkar Khot 
          </a>
        </h1>
        <p className="pt-2 font-semibold">{PROFILE.info}</p>
      </motion.div>
    </div>
  );
};

export default HeroSection;