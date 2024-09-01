import React, { useState } from "react";

function ContactDetails() {
  const [message, setMessage] = useState({
    username: "",
    email: "",
    subject: "",
    body: "",
  });

  //Fn
  const changeHandler = (e) => {
    setMessage({
      ...message,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const username = message.username;
    const email = message.email;
    const subject = message.subject;
    const body = message.body;
    if (!username || !email || !subject || !body) {
      alert("Fill out the form completely");
    } else {
      const res = await fetch("http://localhost:4000/messages", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(message),
      });
      console.log("res", res);
      if (res.status === 201) {
        alert("send message successfully");
        setMessage({
          username: "",
          email: "",
          subject: "",
          body: "",
        });
      }
    }
  };

  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Contact Us
          </h4>
          <h1 className="display-4">Feel Free To Contact</h1>
        </div>
        <div className="row px-3 pb-2">
          <div className="col-sm-4 text-center mb-3">
            <i className="fa fa-2x fa-map-marker-alt mb-3 text-primary"></i>
            <h4 className="font-weight-bold">Address</h4>
            <p>123 Street, New York, USA</p>
          </div>
          <div className="col-sm-4 text-center mb-3">
            <i className="fa fa-2x fa-phone-alt mb-3 text-primary"></i>
            <h4 className="font-weight-bold">Phone</h4>
            <p>+012 345 6789</p>
          </div>
          <div className="col-sm-4 text-center mb-3">
            <i className="far fa-2x fa-envelope mb-3 text-primary"></i>
            <h4 className="font-weight-bold">Email</h4>
            <p>info@example.com</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 pb-5">
            <iframe
              style={{ width: "100%", height: "443px", border: "none" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1663496.3400373347!2d49.255622958637026!3d35.47914079854623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0184f52c957f%3A0x55b32674bc21ead0!2sTehran%20Province%2C%20Iran!5e0!3m2!1sen!2sbd!4v1725191605956!5m2!1sen!2sbd"
              loading="lazy"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
          <div className="col-md-6 pb-5">
            <div className="contact-form">
              <div id="success"></div>
              <form
                onSubmit={submitHandler}
                name="sentMessage"
                id="contactForm"
                noValidate="novalidate"
              >
                <div className="control-group">
                  <input
                    type="text"
                    value={message.username}
                    name="username"
                    onChange={changeHandler}
                    className="form-control bg-transparent p-4"
                    id="name"
                    placeholder="Your Name"
                    required="required"
                    data-validation-required-message="Please enter your name"
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <input
                    type="email"
                    value={message.email}
                    name="email"
                    onChange={changeHandler}
                    className="form-control bg-transparent p-4"
                    id="email"
                    placeholder="Your Email"
                    required="required"
                    data-validation-required-message="Please enter your email"
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <input
                    type="text"
                    value={message.subject}
                    name="subject"
                    onChange={changeHandler}
                    className="form-control bg-transparent p-4"
                    id="subject"
                    placeholder="Subject"
                    required="required"
                    data-validation-required-message="Please enter a subject"
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <textarea
                    value={message.body}
                    name="body"
                    onChange={changeHandler}
                    className="form-control bg-transparent py-3 px-4"
                    rows="5"
                    id="message"
                    placeholder="Message"
                    required="required"
                    data-validation-required-message="Please enter your message"
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div>
                  <button
                    className="btn btn-primary font-weight-bold py-3 px-5"
                    type="submit"
                    id="sendMessageButton"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactDetails;
