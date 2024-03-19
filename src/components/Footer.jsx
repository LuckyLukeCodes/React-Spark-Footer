import legal from "../utils/legal";
import Separator from "./Separator";
import lightning from "../assets/images/lightning.png";

const Footer = () => {
  return (
    <footer className="bottom-[12px] left-0 h-[25rem] w-full bg-[var(--bg-color)] pt-[60px]">
      <section className="grid grid-cols-2">
        <div className="flex items-center">
          <img src={lightning} alt="lightning" />
          <h2 className="electrolize-regular text-xl uppercase">spark</h2>
        </div>
        <div className="flex">
          <div className="flex flex-col">
            <h2>Portfolio</h2>
            <a href="">About</a>
            <a href="">Skills</a>
            <a href="">Attributes</a>
            <a href="">Projects</a>
            <a href="">Testimonials</a>
          </div>
          <div className="flex flex-col">
            <h2>Resources</h2>
            <a href="">Github</a>
            <a href="">NPM</a>
            <a href="">JavaScript</a>
            <a href="">Dribbble</a>
            <a href="">Testimonials</a>
          </div>
        </div>
      </section>
      <Separator />
      <section className="flex flex-col-reverse items-center justify-between gap-[0.8rem] py-[2rem] text-center md:flex-row md:justify-center md:gap-[2rem] md:text-left">
        <p className="text-[1.2rem]">© 2024 Lucky Luke Codes</p>
        <div className="text-[1.2rem]">
          {legal.map((item) => (
            <a
              key={item.text}
              href=""
              onClick={(e) => {
                e.preventDefault();
              }}
              className="ml-[0.4rem]"
            >
              {item.text}
            </a>
          ))}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
