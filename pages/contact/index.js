import React from "react";

//components
import PageHeader from "@/components/module/PageHeader/PageHeader";
import ContactDetails from "@/components/template/Contact/ContactDetails";

function Contact() {
  return (
    <>
      <PageHeader title={"Contact"} href={"contact"} />;
      <ContactDetails />
    </>
  );
}

export default Contact;
