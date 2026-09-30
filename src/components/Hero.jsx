import RiseText from "./RiseText";
import HeroText from "./HeroText";

export default function Hero() {
  return (
    <section
      id="top"
      className="hero container relative flex flex-col justify-center overflow-hidden px-6 md:px-[69.12px]"
      style={{
        minHeight: "100svh",
        paddingTop: "60px",
        paddingBottom: "48px",
      }}
    >
      <div className="relative z-10 w-full">
        <RiseText
          as="p"
          text="Backend Developer · India"
          className="text-xs md:text-sm tracking-[0.2em] text-gray-400 mb-8 uppercase font-medium"
          delay={0.1}
        />
        <HeroText />
        <RiseText
          as="p"
          text="Five years across government, health and industry. Now working with frontier AI labs."
          className="text-lg md:text-xl text-gray-400 mt-10 max-w-xl leading-relaxed"
          delay={0.7}
        />
      </div>
      <div className="absolute bottom-10 right-10 md:right-16 text-xs tracking-[0.2em] text-gray-500 font-medium">
        SCROLL ↓
      </div>
    </section>
  );
}