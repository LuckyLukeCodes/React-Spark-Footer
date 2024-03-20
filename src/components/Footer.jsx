import { languages, company } from "../utils";
import Separator from "./Separator";
import LinkSection from "./LinkSection";
import LegalSection from "./LegalSection";
import CompanySection from "./CompanySection";
import ContactSection from "./ContactSection";

const Footer = () => {
  return (
    <footer className="bottom-[12px] left-0 h-full w-full bg-[var(--bg-color)] px-12 pt-12">
      <section className="grid md:grid-cols-1 lg:grid-cols-2">
        <CompanySection />
        <div className="mt-12 grid gap-12 md:mt-8 md:grid-cols-1 md:grid-rows-2 lg:mr-9 lg:grid-cols-3 lg:grid-rows-1">
          <LinkSection sectionTitle="company" items={company} />
          <LinkSection sectionTitle="languages" items={languages} />
          <ContactSection />
        </div>
      </section>
      <Separator />
      <LegalSection />
    </footer>
  );
};

export default Footer;
