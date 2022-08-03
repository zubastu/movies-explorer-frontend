import React from "react";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Form from "../Form/Form";

const Movies = () => {
  return (
    <section className="movies">
      <Header />
      <div className="search-container">
        <Form formName="search" />
      </div>
      <Footer />
    </section>
  );
};

export default Movies;
