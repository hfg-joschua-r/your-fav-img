import ImageRlPortrait from "../ImageRlPortrait/index";

//TODO add framer motion to animate text in
//TODO: add props to change "direction" of image, render with conditional rendering
export default function PrimeImage(props) {
  return (
    <>
      <div className="w-screen items-center h-screen">
        <div className="w-full h-5/6 mt-30 z-10">
          <ImageRlPortrait img={props.img} />
        </div>
      </div>
    </>
  );
}
