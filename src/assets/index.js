
let assets = []

// "Meisje met de parel"
import diffuse from "./1-diffuse.webp";
import normal from "./1-normal.webp";
import depth from "./1-depth.webp";

//nat img
import natDif from "./nat.jpg";
import natNor from "./normalMa.png"
import natDep from "./Download.png"

// Sample Cube
import cube_diffuse from "./cube_diffuse.webp";
import cube_normal from "./cube_normal.webp";
import cube_depth from "./cube_depth.webp";

// Portrait
import portrait_diffuse from "./portrait_diffuse.webp";
import portrait_normal from "./portrait_normal.webp";
import portrait_depth from "./portrait_depth.webp";

//my own
import myDiffuse from "./Bild004_Neg.Nr.N4.jpg";
import myNormal from "./myNormal2.png";
import myDepth from "./depthMap.png";

const img1 = { diffuse: diffuse, normal: normal, depth: depth, width:800, height:947 };
assets.push(img1);
const img2 = { diffuse: natDif, normal: natNor, depth: natDep, width:3000, height:2000 };
assets.push(img2);

let img3 = {
  diffuse: portrait_diffuse,
  normal: portrait_normal,
  depth: portrait_depth,
  width: 684,
  height: 824
};
assets.push(img3)

const imgData = {
  diffuse: myDiffuse,
  normal: myNormal,
  depth: myDepth,
  width: 1536,
  height: 1024
};
assets.push(imgData);


export default assets;
