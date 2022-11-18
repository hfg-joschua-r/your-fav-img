import assets from "./assets/index";
import "./App.css"
import Poc from "./Poc/"

import ImageRlPortrait from "./ImageRlPortrait"
import ImageRlPainting from "./ImageRlPainting"
import ImageRlLandscape from "./ImageRlLandscape"

import HeroSection from "./components/HeroSection";
// import Poc from "./PocArchived.jsx"

function App() {
  let heroImage;
  let primeImage;
  let secondaryImage;
  let imgageGroup = [];


  const images = assets.map((image, index) => { 
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
      imgageGroup.push(image);
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
      <ImageRlPortrait img={primeImage} />
    </div>
  )
}

function imageSwitch(image) {
  switch(image.type) {
    case 'portrait':
      return <ImageRlPortrait img={image} />;
    case 'landscape':
      // return <ImageRlLandscape img={image}/>;
      return <></>; //lets not render landscape for now
    case 'painting':
      return <ImageRlPainting img={image} />;
    case 'hero':
      return <HeroSection img={image} />;
    default:
      return 'internal rendering error';
  }
}
export default App
