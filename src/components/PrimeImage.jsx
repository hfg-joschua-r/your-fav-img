import ImageRlPainting from "../ImageRlPainting/index";

//TODO add framer motion to animate text in
//TODO: add props to change "direction" of image, render with conditional rendering
export default function PrimeImage(props) {
  return (
    <>
      <div className="grid grid-cols-8 grid-rows-2 items-center  bg-ciYellowLightest h-[89vh] -mt-16 mb-10 ">
        <div className="col-span-5 row-span-2 w-full h-5/6 mt-60 pl-20 z-10">
          <ImageRlPainting img={props.img} />
        </div>
        <div className="row-span-1 col-span-3">
          <h1 className="text-ciYellowDark text-5xl font-sans text-center font-extrabold">
            Let there <br />
            be <span className="text-ciYellowAccent">light.</span>
          </h1>
        </div>
        <div className="bg-ciYellowDark z-0 w-full h-28 col-span-8 row-span-1 flex items-end">
          <div className="basis-2/3">{/* Blocker */}</div>
          <div className="text-ciYellowLightest text-left basis-1/3 pb-5">
            <p className="font-extrabold z-10 pt-52">{props.img.title}</p>
            <p className="font-normal z-10 pt-1 leading-4 text-base">
              {props.img.artist}
            </p>
            <p className="font-normal z-10">{props.img.medium}</p>
          </div>
        </div>
      </div>
    </>
  );
}
