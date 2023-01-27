import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ImageRlPainting from "../ImageRlPainting/index";
import { RevealText } from "./HeroSection";
//stylying with framer Motion, missing anims

export default function GroupImage(props) {
  const sectionRef = useRef(null);
  const isSectionVisible = useInView(sectionRef, { once: true });
  const imageVariants = {
    out: { opacity: 0, y: 200 },
    in: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, type: "tween", ease: "easeInOut" },
    },
  };
  const textVariants = {
    out: { opacity: 0 },
    in: {
      opacity: 1,
      transition: { duration: 4, type: "tween", ease: "easeInOut" },
    },
  };

  const controls = useAnimation();
  useEffect(() => {
    if (isSectionVisible) {
      controls.start("in");
    } else {
      controls.start("out");
    }
  }, [controls, isSectionVisible]);

  const images = props.imgs.map((image, index) => {
    const [isTextVisible, setTextVisible] = useState(false);

    return (
      <section
        className="col-span-1 row-span-1 grid grid-rows-3 overflow-hidden"
        key={index}
        ref={sectionRef}
      >
        <motion.div
          variants={imageVariants}
          initial="out"
          animate={controls}
          className="row-span-2 h-full"
          onHoverStart={() => setTextVisible(true)}
        >
          <ImageRlPainting img={image} />
        </motion.div>
        <motion.div
          variants={textVariants}
          initial="out"
          animate={controls}
          className="h-full row-span-1 text-ciWhite text-left lg:bg-[url('/assetsImg/linesVert.svg')] bg-contain bg-no-repeat px-4"
        >
          {isTextVisible && (
            <>
              <RevealText
                text={image.title}
                styles="lg:mt-4 lg:ml-2 font-extrabold text-sm lg:text-lg"
              />
              <RevealText
                text={image.artist}
                styles="font-normal lg:ml-2 pt-1 leading-4 text-xs lg:text-base z-10"
              />
              <RevealText
                text={image.medium}
                styles="font-normal lg:ml-2 text-xs lg:text-base"
              />
            </>
          )}
        </motion.div>
      </section>
    );
  });
  return (
    <div className="grid gap-12 grid-rows-3 lg:grid-rows-1 grid-cols-1 lg:grid-cols-3 lg:px-20 h-screen">
      {images}
    </div>
  );
}
