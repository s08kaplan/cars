import React from "react";
import ContactForm from "src/components/Form/ContactForm";


const Contact = () => {
  return (
    <main className="flex flex-col">
      <section>
        <img
          src="https://cdn.pixabay.com/photo/2013/07/12/17/51/gauge-152570_640.png"
          alt="sppedometer"
          className="w-full h-46 object-contain origin-top"
        />

        <h3>Contact us</h3>
        <h4>We value your opinions and suggestions</h4>
      </section>
      <section className="flex flex-col lg:flex-row justify-center items-center">
        <div className="w-1/2 lg:w-full">
          <ContactForm />
        </div>
        <div className="my-2 p-2 w-1/2 flex flex-col gap-1.5 justify-start items-start">
          <p>Address:</p>
          <p>Contact No:</p>
          <p>Email: </p>
        </div>
      </section>
    </main>
  );
};

export default Contact;
