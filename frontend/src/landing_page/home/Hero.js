import React from 'react';
import homeHero from '../../assets/homeHero.png';

function Hero() {
  return (
    /* 100 vh → full-screen, flex column, centred */
    <section className="d-flex flex-column justify-content-center align-items-center min-vh-100 py-5">
      <div className="container text-center">
        {/* img-fluid keeps it responsive, mx-auto truly centres */}
        <img src={homeHero} alt="Hero section"
             className="img-fluid mx-auto d-block mb-5" />

        <h1 className="mt-3">Invest in everything</h1>
        <p className="lead">
          Online platform to invest in stocks, derivatives,&nbsp;
          mutual funds and cryptocurrencies
        </p>

        <button className="btn btn-primary btn-lg px-4">
          Sign&nbsp;up&nbsp;now
        </button>
      </div>
    </section>
  );
}

export default Hero;


