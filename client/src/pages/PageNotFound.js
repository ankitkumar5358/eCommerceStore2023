import React from "react";
import { Link } from "react-router-dom";
import Layout from "./../components/Layout/Layout";

const Pagenotfound = () => {
  return (
    <Layout title={"Go Back- Page Not Found"}>
      <div className="pnf">
        <h1 className="pnf-title">404 Error - Page Not Found 🙂</h1>
        <h2 className="pnf-heading">
          Oops!👀 The page you are looking for could not be found. It seems that
          the content you are searching for has either been moved, deleted, or
          never existed in the first place. We apologize for any inconvenience
          caused. Please double-check the URL or try using our website's
          navigation to find the desired information.
        </h2>
        <Link to="/" className="pnf-btn">
          Go Back
        </Link>
      </div>
    </Layout>
  );
};

export default Pagenotfound;
