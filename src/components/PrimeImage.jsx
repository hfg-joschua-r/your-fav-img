import {
  motion,
  useAnimation,
  useAnimationControls,
  useInView,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ImageRlPainting from "../ImageRlPainting/index";
import { RevealText } from "./HeroSection";

export default function PrimeImage(props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 1, once: false });
  const [textVisible, setTextVisible] = useState(false);

  const containerRef = useRef(null);
  const containerInView = useInView(containerRef, {
    once: false,
  });
  const imageRef = useRef(null);
  const imageInView = useInView(ref, { once: true, threshold: 0.5 });

  const imageVariants = {
    in: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        type: "tween",
        ease: "easeInOut",
        delay: 0.7,
      },
    },
    out: {
      y: 200,
      opacity: 0,
    },
  };

  const controls = useAnimation();
  useEffect(() => {
    if (imageInView) {
      controls.start("in");
    } else {
      controls.start("out");
    }
  }, [controls, imageInView]);

  return (
    <>
      <div className="grid grid-cols-8 grid-rows-4 lg:grid-rows-2 items-center bg-ciYellowLightest h-screen -mt-16 mb-10 z-10 overflow-hidden">
        <motion.div
          ref={imageRef}
          variants={imageVariants}
          initial="out"
          animate={controls}
          onHoverStart={() => setTextVisible(true)}
          className="col-span-8 lg:col-span-5 row-span-4 lg:row-span-2 w-full h-full lg:mt-60 lg:pl-20 z-20 lg:order-1 order-2"
        >
          <ImageRlPainting img={props.img} />
        </motion.div>
        <div
          ref={ref}
          className="row-span-1 col-span-8 lg:col-span-3 lg:order-2 order-1 text-ciYellowDark text-4xl lg:text-5xl font-sans text-center font-normal"
        >
          {isInView ? <RevealHeadline /> : null}
        </div>

        <motion.div
          ref={containerRef}
          initial={containerInView ? { y: 200, opacity: 0 } : { opacity: 0 }}
          animate={containerInView ? { y: 0, opacity: 1 } : { opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-ciYellowDark z-0 w-full h-28 col-span-8 row-span-1 flex items-end order-3"
        >
          <div className="lg:basis-2/3">{/* Blocker */}</div>
          {textVisible ? (
            <div className="text-ciYellowLightest text-left pl-12 lg:pl-0 lg:basis-1/3 pb-5">
              <RevealText
                text={props.img.title}
                styles="font-extrabold z-20 text-md lg:text-lg"
              />
              <RevealText
                text={props.img.artist}
                styles="font-normal z-20 pt-1 leading-4 text-base"
              />
              <RevealText text={props.img.medium} styles="font-normal z-20" />
            </div>
          ) : null}
        </motion.div>
      </div>
    </>
  );
}

const RevealHeadline = () => {
  const line1 = "Let there be";
  const line2 = " light.";

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.h3
      variants={sentence}
      initial="hidden"
      animate="visible"
      className="max-w-sm mx-auto"
    >
      {line1.split("").map((char, index) => {
        return (
          <motion.span variants={letter} key={index}>
            {char}
          </motion.span>
        );
      })}
      {line2.split("").map((char, index) => {
        return (
          <motion.span
            className=" text-ciYellowAccent"
            variants={letter}
            key={index}
          >
            {char}
          </motion.span>
        );
      })}
    </motion.h3>
  );
};
