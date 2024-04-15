import { useEffect } from "react";
import ContactDetails from "../components/ContactDetails/ContactDetails";
import ContactForm from "../components/ContactForm/ContactForm";
import Container from "../components/Container/Container";
import GoogleMapContact from "../components/GoogleMapContact/GoogleMapContact";
import { Helmet } from "react-helmet";

const Contact = () => {
  // ensure that the new page starts at the top when navigating
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <Helmet>
        <title>Luxinesy | Contact</title>
      </Helmet>
      <GoogleMapContact />
      <section className="relative lg:py-16 py-8">
        <ContactForm />
        <ContactDetails />
      </section>
    </Container>
  );
};

export default Contact;
