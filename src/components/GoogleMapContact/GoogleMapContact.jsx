const GoogleMapContact = () => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="700"
      className="container-fluid mx-auto relative ">
      <div className="grid grid-cols-1">
        <div className="w-full leading-[0] border-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.698629884416!2d90.40235011155244!3d23.793743778551782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7163736e453%3A0xb12cfac638de13ed!2sProgramming%20Hero!5e0!3m2!1sen!2sbd!4v1712767993048!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
};

export default GoogleMapContact;
