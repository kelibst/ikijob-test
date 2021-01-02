import React from "react";
import Icofont from "react-icofont";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-desc-cont col-xl-10 mx-auto d-sm-flex">
        <div className="hero-description text-white col-md-4">
          <h2 className="hero-header font-weight-bolder text-center my-5 text-light">
            Lorem ipsum dolor sit amet consectetur!
          </h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          eligendi commodi cum nemo repellat veniam eius repellendus sequi quam.
          At, fugit impedit nisi quibusdam quis ea, nobis sint eligendi
          distinctio enim, incidunt laboriosam inventore amet quisquam repellat.
          Sint, eligendi id!
          <a href="#somelink" className="btn hero-btn mt-3 btn-outline-danger text-white text-uppercase font-weight-bolder">Get Started! <Icofont className="icofont-3x" icon='long-arrow-right' /></a>
        </div>

        <div className="hero-elus col-md-8"></div>
      </div>
    </div>
  );
};

export default Hero;