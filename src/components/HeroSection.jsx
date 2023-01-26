import { motion, useAnimation, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import ImageRlHero from "../ImageRlHero/index";

export default function HeroSection(props) {
  const [textVisible, setTextVisible] = useState(false);

  return (
    <div className="relative grid lg:grid-cols-2 h-screen content-center items-center pt-3 lg:pt-10 pb-32">
      <div className="text-ciYellowLightest text-2xl lg:text-5xl font-sans text-center font-normal col-span-1">
        <RevealHeadline />
      </div>
      <motion.div
        initial={{ y: 1200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, type: "tween", delay: 0.7 }}
        className="h-[70vh] lg:h-screen lg:pr-9 pb-8 z-10"
        onHoverStart={() => setTextVisible(true)}
      >
        <ImageRlHero img={props.img} />
      </motion.div>
      <motion.div
        initial={{ y: 350, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="absolute bg-ciYellowLight bottom-16 z-0 w-full h-28 font-sans text-ciYellowDark text-left"
      >
        {textVisible ? (
          <div className="pl-20 pt-8 lg:pt-4">
            <RevealText
              text={"Luennsy X Lisa Danielle"}
              styles="font-extrabold text-md lg:text-lg"
            />
            <RevealText
              text={"Luna Kloess"}
              styles="font-normal pt-1 leading-4 text-sm lg:text-base"
            />
            <RevealText
              text={"FUJFILM X100V f/2 1/125"}
              styles="font-normal text-sm lg:text-base"
            />
          </div>
        ) : null}
      </motion.div>
    </div>
  );
}

const RevealHeadline = () => {
  const line1 = "Unveil new Perspectives in";
  const line2 = " art.";

  const sentence = {
    hidden: { opacity: 0 },
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
          <motion.span className=" text-ciYellow" variants={letter} key={index}>
            {char}
          </motion.span>
        );
      })}
    </motion.h3>
  );
};

export const RevealText = ({ text, styles }) => {
  const line1 = text;

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0,
        staggerChildren: 0.07,
      },
    },
  };
  const letter = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.p
      variants={sentence}
      initial="hidden"
      animate="visible"
      className={styles}
    >
      {line1.split("").map((char, index) => {
        return (
          <motion.span variants={letter} key={index}>
            {char}
          </motion.span>
        );
      })}
    </motion.p>
  );
};
