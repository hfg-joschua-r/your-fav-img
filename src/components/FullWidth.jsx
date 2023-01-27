import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import ImageRlPortrait from "../ImageRlPortrait/index";

export default function FullWidth(props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.5, once: true });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 2, delay: 0.5, type: "tween", ease: "easeInOut" },
    },
  };
  const controller = useAnimation();
  useEffect(() => {
    if (isInView) {
      controller.start("visible");
    } else {
      controller.start("hidden");
    }
  }, [controller, isInView]);

  return (
    <div className="h-[70vh] mb-8 mt-8">
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={controller}
        className="w-screen mt-16 h-full "
      >
        {/* h-64 mobile */}
        <ImageRlPortrait img={props.img} />
      </motion.div>
    </div>
  );
}
