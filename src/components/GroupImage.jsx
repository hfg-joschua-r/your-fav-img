import ImageRlPainting from "../ImageRlPainting/index";

//TODO: add props to change "direction" of image, render with conditional rendering
export default function GroupImage(props) {
  //props enthält 3 Bilder

  const images = props.imgs.map((image, index) => {
    return (
      <div className="col-span-1 row-span-1 h-3/4" key={index}>
        <ImageRlPainting img={image} />
        <div className="text-ciWhite items-start px-2 pt-4 text-left bg-[url('/assetsImg/linesVert.svg')] bg-contain h-full lg:h-2/5 min-w-full bg-no-repeat">
          <p className="font-extrabold px-4 lg:-mt-0 lg:pt-4 z-10">
            {image.title}
          </p>
          <p className="font-normal px-4 pt-1 leading-4 z-10">{image.artist}</p>
          <p className="font-normal px-4 z-10">{image.medium}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="relative grid lg:grid-rows-1 gap-12 grid-cols-1 lg:grid-cols-3 items-center lg:px-20 h-screen lg:mb-60">
      {images}
    </div>
  );
}
