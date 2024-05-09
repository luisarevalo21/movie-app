import React, { useState } from "react";
import heroImage from "../assets/hero-image.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    if (search !== "") {
      console.log("search value", search);
      navigate(`/movies/${search}`);
    }
  };
  return (
    <div className="hero">
      <img src={heroImage} alt="" className="hero__image" />
      <div className="hero__content">
        <h1 className="hero__title">
          Ticket <span>+</span>
        </h1>
        <p className="hero__subtitle">With over 3000 movies on Ticket+, the possibilites are endless!</p>
        {/* //trouble shoot css issue on form */}
        <form action="" onSubmit={handleSubmit} className="hero__form">
          <input
            type="text"
            className="hero__search"
            onSubmit={handleSubmit}
            onChange={e => setSearch(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default Hero;
