import ImageRlPainting from "../ImageRlPainting/index";

//TODO: add props to change "direction" of image, render with conditional rendering
export default function GroupImage(props) {
  //props enthält 3 Bilder

  const images = props.imgs.map((image, index) => {
    return (
      <div className="col-span-4 h-3/4" key={index}>
        <ImageRlPainting img={image} />
        <div className="text-ciWhite flex flex-col items-start px-2 pt-4 text-left bg-[url('/assetsImg/linesVert.svg')] bg-center pb-10">
          <p className="font-extrabold px-4 pt-4 z-10">{image.title}</p>
          <p className="font-normal px-4 z-10">{image.artist}</p>
          <p className="font-normal px-4 z-10">{image.medium}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="grid grid-row gap-8 grid-cols-12 items-center px-20 h-screen mb-60">
      {images}
    </div>
  );
}
