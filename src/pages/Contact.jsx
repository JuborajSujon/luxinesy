import { useEffect } from "react";
import ContactDetails from "../components/ContactDetails/ContactDetails";
import ContactForm from "../components/ContactForm/ContactForm";
import GoogleMapContact from "../components/GoogleMapContact/GoogleMapContact";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ContainerBox from "../components/ContainerBox/ContainerBox";

const Contact = () => {
  // ensure that the new page starts at the top when navigating
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <HelmetProvider>
      <ContainerBox>
        <Helmet>
          <title>Luxinesy | Contact</title>
        </Helmet>
        <GoogleMapContact />
        <section className="relative lg:py-16 py-8">
          <ContactForm />
          <ContactDetails />
        </section>
      </ContainerBox>
    </HelmetProvider>
  );
};

export default Contact;
