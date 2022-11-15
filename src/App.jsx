import assets from "./assets/index";
import "./App.css"
import Poc from "./Poc/"

import ImageRlPortrait from "./ImageRlPortrait"
import ImageRlPainting from "./ImageRlPainting"
import ImageRlLandscape from "./ImageRlLandscape"
// import Poc from "./PocArchived.jsx"

function App() {

  const images = assets.map((image, index) => { 
      return (
        <div key={image.diffuse}>
          {imageSwitch(image)}
        </div>
      );
    });


  return (
    <div className="App">
      <h3>relighting </h3>
      {/* <Poc img={assets[0]} /> Debug :))*/}
      {images}
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
    default:
      return 'internal rendering error';
  }
}
export default App
