import ImageRlHero from "../ImageRlHero/index";

export default function HeroSection(props) {
  return (
    <div className="relative grid lg:grid-cols-2 h-screen content-center items-center pt-3 lg:pt-10 pb-32">
      <h3 className=" text-ciYellowLightest text-2xl lg:text-5xl font-sans text-center font-extrabold col-span-1 px-auto">
        Unveil new
        <br /> perspectives <br />
        {/* replace with max width instead of br */}
        in <span className="text-ciYellow">art.</span>
      </h3>
      <div className="h-[70vh] lg:h-screen lg:pr-9 pb-8 z-10">
        <ImageRlHero img={props.img} />
      </div>
      <div className="absolute bg-ciYellowLight bottom-16 z-0 w-full h-28 font-sans text-ciYellowDark text-left">
        <div className="pl-12 pt-8 lg:pt-4">
          <p className="font-extrabold text-md lg:text-lg">
            Luennsy X Lisa Danielle
          </p>
          <p className="font-normal pt-1 leading-4 text-sm lg:text-base">
            Luna Kloess
          </p>
          <p className="font-normal text-sm lg:text-base">
            FUJFILM X100V f/2 1/125
          </p>
        </div>
      </div>
    </div>
  );
}
