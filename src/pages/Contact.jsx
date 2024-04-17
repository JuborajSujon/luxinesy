import { useEffect } from "react";
import ContactDetails from "../components/ContactDetails/ContactDetails";
import ContactForm from "../components/ContactForm/ContactForm";
import GoogleMapContact from "../components/GoogleMapContact/GoogleMapContact";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  // ensure that the new page starts at the top when navigating
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pb-20">
      <Helmet>
        <title>Luxinesy | Contact</title>
      </Helmet>
      <GoogleMapContact />
      <section className="lg:py-16 py-8">
        <ContactForm />
        <ContactDetails />
      </section>
    </div>
  );
};

export default Contact;
