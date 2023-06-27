import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommerce app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/abtus.jpg"
            alt="contactus"
            style={{ width: "600px" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            At Ecommerce app, we are dedicated to revolutionizing your online
            shopping experience. As a leading ecommerce platform, our mission is
            to provide a seamless and user-friendly interface that connects you
            to a vast array of products from various trusted sellers. We strive
            to create a convenient and secure marketplace where you can explore,
            discover, and purchase your desired items with confidence. With our
            commitment to excellence, we prioritize delivering exceptional
            customer service and building lasting relationships. Our team of
            experienced professionals works tirelessly to ensure a smooth and
            enjoyable shopping journey, addressing any concerns and providing
            timely assistance whenever needed. We embrace innovation and
            continuously enhance our platform to stay ahead of the evolving
            trends and demands of the ecommerce landscape. By leveraging
            cutting-edge technologies and robust infrastructure, we optimize the
            performance, reliability, and security of our ecommerce app,
            enabling you to shop with peace of mind. Join us on this exciting
            ecommerce journey and unlock a world of limitless possibilities.
            Experience the convenience, reliability, and joy of online shopping
            like never before with Ecommerce app. Welcome to a new era of online
            shopping excellence. Welcome to Ecommerce app.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
