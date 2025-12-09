import React from "react";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <section id="explore">
      <div className="container">
        <div 
          className="row" 
          style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <h2 className="section__title">
            Explore more <span style={{ color: "#d4a373" }}>Books</span>
          </h2>
          <Link to="/books">
            <button className="btn">Browse Books</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Explore;
