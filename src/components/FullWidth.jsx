import ImageRlPortrait from "../ImageRlPortrait/index";

//TODO add framer motion to animate text in
//TODO: add props to change "direction" of image, render with conditional rendering
export default function PrimeImage(props) {
  return (
    <div className="relative w-screen items-center h-64 lg:h-screen mt-12 lg:mt-0">
      <div className="w-full h-full lg:h-5/6 mt-30 z-10">
        <ImageRlPortrait img={props.img} />
      </div>
    </div>
  );
}
