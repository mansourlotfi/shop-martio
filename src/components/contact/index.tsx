import React from "react";
import ContactBox from "./contactBox";

function ContactComponent() {
  return (
    <>
      <ContactBox />
      <div className="e-contact-map">
        <div className="container-fluid">
          <div className="row">
            <div className="contant-innermap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7915.525673176609!2d46.32542404246615!3d38.06389198146334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDAzJzUzLjgiTiA0NsKwMTknMzkuNCJF!5e0!3m2!1sen!2s!4v1545664085241"
                style={{ border: 0, width: "100%", height: 500 }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactComponent;
