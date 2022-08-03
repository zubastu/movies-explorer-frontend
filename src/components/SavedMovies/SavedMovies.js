import React from "react";
import "./SavedMovies.css";
import Header from "../Header/Header";
import Form from "../Form/Form";
import Footer from "../Footer/Footer";

const SavedMovies = () => {
  return (
    <section className="saved-movies">
      <Header />
      <div className="search-container">
        <Form formName="search" />
      </div>
      <Footer />
    </section>
  );
};

export default SavedMovies;
