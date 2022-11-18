import assets from "./assets/index";
import "./App.css"
import Poc from "./Poc/"

import ImageRlPortrait from "./ImageRlPortrait"
import ImageRlPainting from "./ImageRlPainting"
import ImageRlLandscape from "./ImageRlLandscape"

import HeroSection from "./components/HeroSection";
import PrimeImage from "./components/PrimeImage";
import GroupImage from "./components/GroupImage"
// import Poc from "./PocArchived.jsx"

function App() {
  let heroImage;
  let primeImage;
  let secondaryImage;
  let imageGroup = [];


  assets.map((image, index) => { 
    if(image.type === "hero"){
      heroImage = image;
    }
    else if(image.type === "painting_prime"){
      primeImage = image;
    }
    else if(image.type === "portrait_secondary"){
      secondaryImage = image;
    }
    else{
      imageGroup.push(image);
    }
      // return (
      //   <div key={image.diffuse}>
      //     {imageSwitch(image)}
      //   </div>
      // );
    });

  return (
    <div className="App bg-black h-full ">
      <HeroSection img={heroImage}/>
      {/* <HeroSection /> */}
      {/* <Poc img={assets[0]} /> Debug :))*/}
      {/* todDO: image leicht gedreht  */}
      <PrimeImage img={primeImage} orientation={"right"}/>
      <GroupImage imgs={imageGroup}/>
      <PrimeImage img={secondaryImage} orientation={"left"}/>
    </div>
  )
}

export default App
