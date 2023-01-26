import ImageRlPainting from "../ImageRlPainting/index";
//stylying with framer Motion

export default function GroupImage(props) {
  const images = props.imgs.map((image, index) => {
    return (
      <section className="col-span-1 row-span-1 grid grid-rows-3" key={index}>
        <div className="row-span-2 h-full">
          <ImageRlPainting img={image} />
        </div>
        <div className="h-full row-span-1 text-ciWhite text-left lg:bg-[url('/assetsImg/linesVert.svg')] bg-contain bg-no-repeat px-4">
          <p className="font-extrabold text-md lg:text-lg">{image.title}</p>
          <p className="font-normal pt-1 leading-4 text-sm lg:text-base z-10">
            {image.artist}
          </p>
          <p className="font-normal text-sm lg:text-base">{image.medium}</p>
        </div>
      </section>
    );
  });
  return (
    <div className="grid gap-12 grid-rows-3 lg:grid-rows-1 grid-cols-1 lg:grid-cols-3 lg:px-20 h-screen">
      {images}
    </div>
  );
}
