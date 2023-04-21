import React from "react";
import "./Index.css";

const Index = () => {
  return (
    <div className="container-fluid hero">
      <div className="row custom-row">
        <div className="col first-col"></div>
        <div className="col second-col">
          <h1 className="logo">Cowry~pay</h1>
          <br />
          <section>
            <h1>E-Transaction made easier</h1>
            <br />
            <h4> With Cowry~pay:</h4>
            <ul>
              <li>Easy Payment & Withdrawal Method</li>
              <li>Quick Alert</li>
              <li>Use our Shortcode, Website or MobileApp</li>
              <li>24hours Customer Care service</li>
              <li>Internation Transactions available</li>
            </ul>
          </section>
          <br />
          <input type="button" value="Join Cowry~pay" />

          <input type="button" value="Download" />
        </div>
      </div>
    </div>
  );
};

export default Index;
