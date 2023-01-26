import "./App.css";
import assets from "./components/index";

import Footer from "./components/Footer";
import FullWidth from "./components/FullWidth";
import GroupImage from "./components/GroupImage";
import HeroSection from "./components/HeroSection";
import PrimeImage from "./components/PrimeImage";

import { animate, motion } from "framer-motion";
import { useRef } from "react";
import useScrollSnap from "react-use-scroll-snap";

function App() {
  let heroImage;
  let primeImage;
  let secondaryImage;
  let imageGroup = [];

  assets.map((image, index) => {
    if (image.type === "hero") {
      heroImage = image;
    } else if (image.type === "painting_prime") {
      primeImage = image;
    } else if (image.type === "portrait_secondary") {
      secondaryImage = image;
    } else {
      imageGroup.push(image);
    }
  });

  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 20, delay: 5 });

  return (
    <>
      <motion.div
        className="App h-full hidden lg:block overflow-hidden"
        ref={scrollRef}
      >
        <section>
          <div>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 3 }}
              className="text-ciYellow text-5xl font-serif text-left pl-20 pt-6"
            >
              your-fav-img
            </motion.h1>
          </div>
          <HeroSection img={heroImage} />
        </section>
        <section>
          <PrimeImage img={primeImage} orientation={"right"} />
        </section>
        <section>
          <GroupImage imgs={imageGroup} />
        </section>
        <section>
          <FullWidth img={secondaryImage} />
          <Footer />
        </section>
      </motion.div>

      {/* MOBILE VERSION */}
      <div className="App bg-black h-full min-h-screen block lg:hidden select-none">
        <h1 className="text-ciYellow text-4xl font-serif text-center pt-6">
          your-fav-img
        </h1>
        <HeroSection img={heroImage} />
        <PrimeImage img={primeImage} orientation={"right"} />
        <GroupImage imgs={imageGroup} />
        <FullWidth img={secondaryImage} />
        <Footer />
      </div>
    </>
  );
}

export default App;
