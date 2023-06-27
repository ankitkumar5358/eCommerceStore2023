import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us - Ecommerce app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/cntct.jpg"
            alt="contactus"
            style={{ width: "600px" }}
          />
        </div>
        <div className="col-md-5">
          <h1 className="bg-dark p-2 text-white text-center">
            Contact Us - We're Here for You 24/7!
          </h1>
          <p className="text-justify mt-2">
            Have a question about our products or need more information? Feel
            free to reach out to us anytime! Our dedicated team is available
            round the clock to assist you. Whether you require assistance with
            product details, placing an order, or resolving any concerns, we are
            just a phone call away. Your satisfaction is our top priority, and
            we are committed to providing you with prompt and reliable support.
            Contact us now and let us help enhance your shopping experience!"
          </p>
          <p className="mt-3">
            <BiMailSend /> : createrankit@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : +91 87095 33982
          </p>
          <p className="mt-3">
            <BiSupport /> : https://ankitportfolio.live/
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
