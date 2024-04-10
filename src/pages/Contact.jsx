import ContactDetails from "../components/ContactDetails/ContactDetails";
import ContactForm from "../components/ContactForm/ContactForm";
import Container from "../components/Container/Container";
import GoogleMapContact from "../components/GoogleMapContact/GoogleMapContact";

const Contact = () => {
  return (
    <Container>
      <GoogleMapContact />
      <section className="relative lg:py-16 py-8">
        <ContactForm />
        <ContactDetails />
      </section>
    </Container>
  );
};

export default Contact;
