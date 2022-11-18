import ImageRlHero from "../ImageRlHero/index";

export default function HeroSection(props) {
  return (
    <div className="relative flex flex-col h-screen content-center items-center pt-10 pb-32 ">
      <h1 className="text-ciYellow text-5xl font-serif p-4">your-fave-img</h1>
      <ImageRlHero img={props.img} />
    </div>
  );
}
