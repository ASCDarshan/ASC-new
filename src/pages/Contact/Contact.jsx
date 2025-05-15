
import { Container } from "../../components/common";
import Contacts from "../../components/Home/Contact";
import Location from "../../components/Contact/Location";
import Faq from "../../components/Contact/Faq";
import OurResponse from "../../components/Contact/OurResponse";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <Container>
        <Contacts />
        <Location />
        <Faq />
        <OurResponse />
      </Container>
    </section>
  );
};

export default Contact;
