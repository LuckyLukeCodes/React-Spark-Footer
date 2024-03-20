import { information } from "../utils";

const ContactSection = () => {
  return (
    <div className="m-auto flex flex-col items-center gap-3 lg:items-start">
      {information.map((info) => (
        <a
          key={info.text}
          href=""
          className="flex items-center gap-4 text-base text-slate-300 lg:text-sm"
        >
          {info.icon} {info.text}
        </a>
      ))}
    </div>
  );
};

export default ContactSection;
