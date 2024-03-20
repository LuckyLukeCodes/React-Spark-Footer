import { socials } from "../utils";
import lightning from "../assets/images/lightning.png";

const CompanySection = () => {
  return (
    <div className="flex flex-col items-center gap-4 lg:w-2/3 lg:items-start lg:justify-center">
      <div className="flex items-center">
        <img src={lightning} alt="lightning" />
        <h2 className="electrolize-regular pl-2 text-3xl font-bold uppercase">
          spark
        </h2>
      </div>
      <p className="flex w-2/3 text-center lg:ml-2 lg:w-full lg:justify-start lg:text-left">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
        harum, consequatur quia minima ipsum eum modi molestias cum eligendi
        iste iure sed nemo vel explicabo excepturi soluta alias animi ipsa.
      </p>
      <div className="ml-1 flex items-center gap-2">
        {socials.map((social) => (
          <a
            key={social.text}
            href=""
            className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-[var(--secondary-color)] p-2 text-[2rem]"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default CompanySection;
