//todo rename pictures
//group pictures by type
let assets = []

//* Portrait Paintings *//
import coubertDiffuse from "./Coubert_Desperate/diffuse.jpg"
import coubertNormal from "./Coubert_Desperate/normal.png"
import coubertDepth from "./Coubert_Desperate/depth.jpg"

const coubert = {
  diffuse: coubertDiffuse,
  normal: coubertNormal,
  depth: coubertDepth,
  width: 1200,
  height: 982,
  type: "painting"
} 

import gericaultDiffuse from "./Madwoman_Gericault/diffuse.jpeg"
import gericaultNormal from "./Madwoman_Gericault/normal.jpeg"
import gericaultDepth from "./Madwoman_Gericault/depth.jpeg"

const gericault = {
  diffuse: gericaultDiffuse,
  normal: gericaultNormal,
  depth: gericaultDepth,
  width: 1106,
  height: 1342, 
  type: "painting"
}

import garshinDiffuse from "./Vsevolod_Garshin/diffuse.jpeg"
import garshinNormal from "./Vsevolod_Garshin/normal.jpeg"
import garshinDepth from "./Vsevolod_Garshin/depth.png"

const garshin = {
  diffuse: garshinDiffuse,
  normal: garshinNormal,
  depth: garshinDepth,
  width: 1416,
  height: 1832,
  type:"painting"
}

import mengsDiffuse from "./Raphael_Mengs/diffuse.jpeg"
import mengsNormal from "./Raphael_Mengs/normal.jpeg"
import mengsDepth from "./Raphael_Mengs/depth.jpeg"

const mengs = {
  diffuse:mengsDiffuse,
  normal:mengsNormal,
  depth:mengsDepth,
  width:874,
  height: 1200,
  type:"painting"
}

assets.push(coubert, gericault, garshin, mengs);


//* Portrait images *//
import joschDiffuse from "./Josch/diffuse.png"
import joschNormal from "./Josch/normal.png"
import joschDepth from "./Josch/depth.png"
const josch = {
  diffuse:joschDiffuse,
  normal:joschNormal,
  depth:joschDepth,
  width:1100,
  height: 1100,
  type:"portrait"
}
assets.push(josch)
// "Meisje met de parel"
import diffuse from "./1-diffuse.webp";
import normal from "./1-normal.webp";
import depth from "./1-depth.webp";

//nat img
import natDif from "./nat.jpg";
import natNor from "./normalMa.png"
import natDep from "./Download.png"

// Sample Cube
import lauren_diffuse from "./lauren_diffuse.jpeg";
import lauren_normal from "./lauren_normal.jpeg";
import lauren_depth from "./lauren_depth.jpeg";

// Portrait
import portrait_diffuse from "./portrait_diffuse.webp";
import portrait_normal from "./portrait_normal.webp";
import portrait_depth from "./portrait_depth.webp";

//my own
import myDiffuse from "./Bild004_Neg.Nr.N4.jpg";
import myNormal from "./myNormal2.png";
import myDepth from "./depthMap.png";

const img1 = { diffuse: diffuse, normal: normal, depth: depth, width:800, height:947, type:"painting" };
assets.push(img1);
const img2 = { diffuse: natDif, normal: natNor, depth: natDep, width:3000, height:2000, type:"landscape" };
assets.push(img2);

let img3 = {
  diffuse: portrait_diffuse,
  normal: portrait_normal,
  depth: portrait_depth,
  width: 684,
  height: 824,
  type:"painting"
};
assets.push(img3)

const imgLauren = {
  diffuse: lauren_diffuse,
  normal: lauren_normal,
  depth: lauren_depth,
  width: 1920, //1920 × 1307
  height: 1307,
  type:"portrait"
}
assets.push(imgLauren)

const imgData = {
  diffuse: myDiffuse,
  normal: myNormal,
  depth: myDepth,
  width: 1536,
  height: 1024,
  type:"landscape"
};
assets.push(imgData);


export default assets;
