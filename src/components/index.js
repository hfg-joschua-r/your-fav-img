//todo rename pictures
//group pictures by type
let assets = [];

//* Portrait Paintings *//
import coubertDepth from "/assets/Coubert_Desperate/depth.webp";
import coubertDiffuse from "/assets/Coubert_Desperate/diffuse.webp";
import coubertNormal from "/assets/Coubert_Desperate/normal.webp";

const coubert = {
  diffuse: coubertDiffuse,
  normal: coubertNormal,
  depth: coubertDepth,
  width: 4160 / 3.5,
  height: 6240 / 3.5,
  type: "hero",
};

import gericaultDepth from "/assets/Madwoman_Gericault/depth.jpeg";
import gericaultDiffuse from "/assets/Madwoman_Gericault/diffuse.jpeg";
import gericaultNormal from "/assets/Madwoman_Gericault/normal.jpeg";

const gericault = {
  diffuse: gericaultDiffuse,
  normal: gericaultNormal,
  depth: gericaultDepth,
  width: 1106 * 1.4,
  height: 1342 * 1.4,
  type: "painting",
  title: "A Madwoman and Compulsive Gambler, 1822",
  artist: "Théodore Géricault",
  medium: "Oil on canvas",
};

// import garshinDiffuse from "/assets/Vsevolod_Garshin/diffuse.jpeg";
// import garshinNormal from "/assets/Vsevolod_Garshin/normal.jpeg";
// import garshinDepth from "/assets/Vsevolod_Garshin/depth.png";

// const garshin = {
//   diffuse: garshinDiffuse,
//   normal: garshinNormal,
//   depth: garshinDepth,
//   width: 1416,
//   height: 1832,
//   type: "painting",
// };

import mengsDepth from "/assets/Raphael_Mengs/depth.jpeg";
import mengsDiffuse from "/assets/Raphael_Mengs/diffuse.jpeg";
import mengsNormal from "/assets/Raphael_Mengs/normal.jpeg";

const mengs = {
  diffuse: mengsDiffuse,
  normal: mengsNormal,
  depth: mengsDepth,
  width: 874 * 1.6,
  height: 1200 * 1.6,
  type: "painting",
  title: "Self-Portrait, 1779",
  artist: "Anton Raphael Mengs",
  medium: "Oil on wood panel",
};

assets.push(coubert, gericault, mengs); //garshin

//* Portrait images *//
import joschDepth from "/assets/Josch/depth.jpg";
import joschDiffuse from "/assets/Josch/diffuse.jpg";
import joschNormal from "/assets/Josch/normal.jpg";
const josch = {
  diffuse: joschDiffuse,
  normal: joschNormal,
  depth: joschDepth,
  width: 3021 * 1.8,
  height: 1810 * 1.8,
  type: "portrait_secondary",
  title: "FLUUR, 2022",
  artist: "Joschua Rothenbacher",
  medium: "Olympus OM-D E-M10 Mark III",
};
assets.push(josch);
// "Meisje met de parel"
import depth from "/assets/1-depth.webp";
import diffuse from "/assets/1-diffuse.webp";
import normal from "/assets/1-normal.webp";

//nat img
// import natDif from "/assets/nat.jpg";
// import natNor from "/assets/normalMa.png";
// import natDep from "/assets/Download.png";

// Sample Cube
// import lauren_diffuse from "/assets/lauren_diffuse.jpeg";
// import lauren_normal from "/assets/lauren_normal.jpeg";
// import lauren_depth from "/assets/lauren_depth.jpeg";

// Portrait
import portrait_depth from "/assets/portrait_depth.webp";
import portrait_diffuse from "/assets/portrait_diffuse.webp";
import portrait_normal from "/assets/portrait_normal.webp";

//my own
// import myDiffuse from "/assets/Bild004_Neg.Nr.N4.jpg";
// import myNormal from "/assets/myNormal2.png";
// import myDepth from "/assets/depthMap.png";

const img1 = {
  diffuse: diffuse,
  normal: normal,
  depth: depth,
  width: 1600,
  height: 1894,
  type: "painting_prime",
  title: "Girl with a Pearl Earring (1665)",
  artist: "Johannes Vermeer",
  medium: "Oil on canvas",
};
assets.push(img1);
// const img2 = {
//   diffuse: natDif,
//   normal: natNor,
//   depth: natDep,
//   width: 3000,
//   height: 2000,
//   type: "landscape",
// };
//assets.push(img2);

let img3 = {
  diffuse: portrait_diffuse,
  normal: portrait_normal,
  depth: portrait_depth,
  width: 684 * 2.3,
  height: 824 * 2.3,
  type: "painting",
  title: "Bust-length portrait of a young lady, 1584",
  artist: "Follower of Frans Pourbus the Younger",
  medium: "oil on oak panel",
};
assets.push(img3);

// const imgLauren = {
//   diffuse: lauren_diffuse,
//   normal: lauren_normal,
//   depth: lauren_depth,
//   width: 1920, //1920 × 1307
//   height: 1307,
//   type: "portrait_secondary",
//   title:"London, UK 2020",
//   artist:"Lauren Noichtl",
//   medium:"Olympus OM-D E-M10 Mark III",
// };
// assets.push(imgLauren);

// const imgData = {
//   diffuse: myDiffuse,
//   normal: myNormal,
//   depth: myDepth,
//   width: 1536,
//   height: 1024,
//   type: "landscape",
// };
//assets.push(imgData);

export default assets;
