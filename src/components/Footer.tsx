import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const Footer = () => {
  const footerVariants = {
    out: { opacity: 0, y: 100 },
    in: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delayChildren: 0.5, staggerChildren: 0.4 },
    },
  };
  const itemVariants = {
    out: { opacity: 0, y: 100 },
    in: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, type: "tween", ease: "anticipate" },
    },
  };
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  useEffect(() => {
    if (inView) {
      controls.start("in");
    } else {
      controls.start("out");
    }
  }, [controls, inView]);

  return (
    <motion.footer
      initial="out"
      variants={footerVariants}
      animate={controls}
      ref={ref}
      className="border-t border-gray-200 py-8 pl-2 lg:pl-0 text-ciYellow z-30 overflow-hidden"
    >
      <motion.div className="container mx-auto flex flex-wrap items-center justify-between">
        <motion.ul className="list-reset flex flex-wrap items-center justify-between mb-6 font-sans">
          <motion.li className="mr-3" variants={itemVariants}>
            <a
              href="https://linkedin.com/in/joschua-rothenbacher-431448200/"
              className=" no-underline"
              target={"_blank"}
            >
              LinkedIn
            </a>
          </motion.li>

          <motion.li className="mr-3" variants={itemVariants}>
            <a
              href="https://github.com/hfg-joschua-r"
              className="no-underline"
              target={"_blank"}
            >
              GitHub
            </a>
          </motion.li>
          <motion.li className="mr-3" variants={itemVariants}>
            <a
              href="https://instagram.com/joschflyboy"
              target={"_blank"}
              className=" no-underline"
            >
              Instagram
            </a>
          </motion.li>
          <motion.li className="ml-6" variants={itemVariants}>
            <p className=" font-thin no-underline">Copyright 2022</p>
          </motion.li>
        </motion.ul>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
