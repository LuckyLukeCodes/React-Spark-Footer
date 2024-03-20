import { information, languages, company } from "../utils";
import Separator from "./Separator";
import LinkSection from "./LinkSection";
import LegalSection from "./LegalSection";
import CompanySection from "./CompanySection";

const Footer = () => {
  return (
    <footer className="bottom-[12px] left-0 h-full w-full bg-[var(--bg-color)] px-12 pt-12">
      <section className="grid md:grid-cols-1 lg:grid-cols-2">
        <CompanySection />
        <div className="mt-12 grid md:mt-8 md:grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
          <div className="flex justify-center gap-12 md:items-start md:justify-evenly lg:gap-12">
            <LinkSection sectionTitle="company" items={company} />
            <LinkSection sectionTitle="languages" items={languages} />
          </div>

          <div className="mx-auto mt-12 flex flex-col gap-3 lg:ml-4 lg:mr-0 lg:mt-8">
            {information.map((info) => (
              <a
                key={info.text}
                href=""
                className="flex items-center gap-4 text-sm"
              >
                {info.icon} {info.text}
              </a>
            ))}
          </div>
        </div>
      </section>
      <Separator />
      <LegalSection />
    </footer>
  );
};

export default Footer;
