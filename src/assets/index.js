// "Meisje met de parel"
import diffuse from "./1-diffuse.webp";
import normal from "./1-normal.webp";
import depth from "./1-depth.webp";

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

const img1 = { diffuse, normal, depth };
const img2 = { diffuse: cube_diffuse, normal: cube_normal, depth: cube_depth };

let img3 = {
  diffuse: portrait_diffuse,
  normal: portrait_normal,
  depth: portrait_depth,
  width: 684,
  height: 824
};

const imgData = {
  diffuse: myDiffuse,
  normal: myNormal,
  depth: myDepth,
};


export const assets = img3;
