import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy -  Ecommerce app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/pvyply.jpg"
            alt="contactus"
            style={{ width: "600px" }}
          />
        </div>
        <div className="col-md-4">
          <p>
            At Ecommerce app, we take your privacy seriously and are committed
            to protecting your personal information. This Privacy Policy
            outlines how we collect, use, and safeguard the data you provide to
            us while using our website and services. Collection of Information:
            We may collect certain personally identifiable information, such as
            your name, contact details, and billing information, to process your
            orders and provide a personalized shopping experience. Use of
            Information: The information we collect is used to fulfill your
            orders, improve our services, and communicate with you regarding
            your purchases and any updates or promotions related to our
            products. Data Security: We employ industry-standard security
            measures to protect your information from unauthorized access, loss,
            or misuse. Our secure systems and encryption protocols ensure that
            your data remains confidential and safeguarded. Third-Party Service
            Providers: We may share your information with trusted third-party
            service providers who assist us in delivering our services, such as
            shipping partners and payment gateways. However, we ensure that
            these providers adhere to strict privacy standards. Cookies and
            Analytics: Our website uses cookies and similar tracking
            technologies to enhance your browsing experience and gather
            statistical data about website traffic and usage. These tools help
            us analyze trends and improve our website's functionality.
            Third-Party Links: Our website may contain links to external sites
            or services that are not controlled or operated by us. We are not
            responsible for the privacy practices or content of these
            third-party websites. Children's Privacy: Our services are not
            intended for individuals under the age of 18. We do not knowingly
            collect or store personal information from children. If we become
            aware of any such data, we promptly delete it. Opt-Out: You have the
            right to opt-out of receiving promotional emails or marketing
            communications from us. You can update your preferences or
            unsubscribe by following the instructions provided in the emails or
            by contacting us directly.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
