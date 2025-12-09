import React from "react";
import UndrawBooks from "../assets/Undraw_Books.svg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>Empower your mind</h1>
            <h2>Find wisdom just a few clicks away</h2>
            <Link to="/books">
              <button className="btn">Browse Books</button>
            </Link>
          </div>
          <figure className="header__img--wrapper">
            <img src={UndrawBooks} alt="Library illustration" />
          </figure>
        </div>
      </header>
    </section>
  );
};

export default Landing;
