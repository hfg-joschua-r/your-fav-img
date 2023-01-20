import "./App.css";
import assets from "./components/index";

import Footer from "./components/Footer";
import FullWidth from "./components/FullWidth";
import GroupImage from "./components/GroupImage";
import HeroSection from "./components/HeroSection";
import PrimeImage from "./components/PrimeImage";

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

  return (
    <>
      <div className="App bg-ciBlack h-full hidden lg:block">
        <div className="">
          <h1 className="text-ciYellow text-5xl font-serif text-left pl-20 pt-6">
            your-fav-img
          </h1>
        </div>
        <HeroSection img={heroImage} />
        <PrimeImage img={primeImage} orientation={"right"} />
        <GroupImage imgs={imageGroup} />
        <FullWidth img={secondaryImage} />
        <Footer />
      </div>

      {/* MOBILE VERSION */}
      <div className="App bg-black h-full min-h-screen block lg:hidden">
        <h1 className="text-ciYellow text-5xl font-serif p-4">your-fave-img</h1>
        <h1 className="text-ciYellow text-2xl font-serif p-4">
          Mobile version currently in development
        </h1>
        <div>
          <img src="/assets/lines.svg" className="top-1/2 my-12" />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
