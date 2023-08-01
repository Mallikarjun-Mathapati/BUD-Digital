import React from "react";
import { Link } from "react-router-dom";

const ContactForm = () => {
  return (
    <>
      <Link className="a-iamsection" id="iamsection"></Link>
      <div className="contact-from">
        <div className="container1">
          <div className="contact-form-flex-main">
            <div className="contact-form-flex">
              <div className="contact-form-content">
                <h2>
                  ARE YOU HUNTING FOR A GOOD MARKETING STRATEGY TO ENGAGE WITH
                  YOUR CLIENTS ACTIVELY?
                </h2>
                <h4>
                  Email marketing campaigns are the best marketing solutions for
                  you
                </h4>
                <p>
                  Optimal email marketing campaigns inspire excitement and
                  curiosity. It creates meaningful relationships through
                  wonderfully crafted words. Prominent email marketing companies
                  in India, like BUD, can help you personalize your story. In
                  other words, we deliver tailored messages straight to your
                  client & inbox. Our email campaigns convey your company &
                  goals and targets. We resonate with the recipients, their
                  needs, etc., capturing their attention and inspiring them to
                  act.
                </p>
                <button>Read me</button>
              </div>
              <div className="contact-form-form">
                <h3>GET IN TOUCH WITH US</h3>
                <form action="">
                  <input
                    type="text"
                    name="Full Name "
                    placeholder="Full Name"
                  />
                  <input
                    type="email"
                    name="E-mail "
                    placeholder="E-mail Address"
                  />
                  <input
                    type="tel"
                    name="Phone Number "
                    placeholder="Phone Number"
                  />
                  <input
                    type="text"
                    name="Company Name "
                    placeholder="Company Name"
                  />
                  <input
                    type="url"
                    name="Website URL "
                    placeholder="Website URL"
                  />
                  <button>Request Free Audit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
