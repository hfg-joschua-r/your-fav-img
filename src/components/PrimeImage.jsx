import ImageRlPainting from "../ImageRlPainting/index";

import ImageRlPortrait from "../ImageRlPortrait/index";
//TODO add framer motion to animate text in
//TODO: add props to change "direction" of image, render with conditional rendering
export default function PrimeImage(props) {
  if (props.orientation === "right") {
    return (
      <div className="relative grid grid-row grid-cols-8 h-screen items-center pt-10 pb-32 px-40">
        <div
          className="col-span-3 h-5/6 bg-contain bg-fixed bg-left"
          style={{ backgroundImage: "url(/assets/lines.svg)" }}
        >
          <div className="flex flex-col items-start justify-items-start justify-self-start font-sans text-ciWhite z-10 px-8">
            <p className="font-extrabold z-10 pt-52">{props.img.title}</p>
            <p className="font-normal z-10">{props.img.artist}</p>
            <p className="font-normal z-10">{props.img.medium}</p>
            {/* <img
            src="/assets/lines.svg"
            className=" left-32 bottom-1/4 z-0 absolute"
          /> */}
          </div>
        </div>
        <div className="col-span-5 w-full h-5/6">
          <ImageRlPainting img={props.img} />
        </div>
      </div>
    );
  } else {
    //orientation is left
    return (
      <div className="relative grid grid-row grid-cols-8 h-screen items-center pt-10 pb-32 px-40 ">
        <div className="col-span-5 w-full h-5/6">
          {/* TODO: replace with ImageRlPortrait */}
          <ImageRlPortrait img={props.img} />
        </div>
        <div
          className="col-span-3 h-5/6 bg-contain bg-fixed bg-right"
          style={{ backgroundImage: "url(/assets/lines.svg)" }}
        >
          <div className="flex flex-col items-end justify-items-start justify-self-end font-sans text-ciWhite z-10 px-8">
            <p className="font-extrabold z-10 pt-52">{props.img.title}</p>
            <p className="font-normal z-10">{props.img.artist}</p>
            <p className="font-normal z-10">{props.img.medium}</p>
          </div>
        </div>
      </div>
    );
  }
}
