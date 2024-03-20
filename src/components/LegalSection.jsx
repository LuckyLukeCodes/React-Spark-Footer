import { legal } from "../utils";

const LegalSection = () => {
  return (
    <section className="flex flex-col-reverse items-center justify-between gap-[0.8rem] py-4 text-center md:flex-row md:justify-center md:gap-[2rem] md:text-left">
      <p className="text-[0.9rem]">© 2024 Lucky Luke Codes</p>
      <div className="text-[0.9rem]">
        {legal.map((item) => (
          <a
            key={item.text}
            href=""
            onClick={(e) => {
              e.preventDefault();
            }}
            className="ml-[0.5rem] hover:text-[--hover-color]"
          >
            {item.text}
          </a>
        ))}
      </div>
    </section>
  );
};

export default LegalSection;
