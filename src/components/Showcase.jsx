import React from 'react';
import { Link } from 'react-router-dom';
import showcase1 from '../assets/img/showcase-photo3.jpg';
import showcase2 from '../assets/img/showcase-photo1.jpg';

function Showcase() {
  return (
    <section className="showcase" id="showcase">
      <div className="container">

        {/* Row 1 — DEGANVY */}
        <div className="row row1">
          <div className="img-box">
            <img src={showcase1} alt="Deganvy UK" />
          </div>
          <div className="text-box">
            <h2 className="lg-heading text-black">DEGANVY, U.K</h2>
            <p className="text-gray">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit incidunt nulla
              a corporis eveniet pariatur maiores, id quis, totam dolore praesentium facere
              consequatur rem, fuga minus!
            </p>
            <Link to="/about" className="btn btn-secondary">More</Link>
          </div>
        </div>

        {/* Row 2 — EGYPT */}
        <div className="row row2">
          <div className="img-box">
            <img src={showcase2} alt="Desert Egypt" />
          </div>
          <div className="text-box">
            <h2 className="lg-heading text-black">DESERT, EGYPT</h2>
            <p className="text-gray">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, amet ratione,
              quas laborum porro, explicabo vero ipsum laudantium nesciunt eos illum pariatur
              obcaecati fugiat asperiores nulla adipisci.
            </p>
            <Link to="/about" className="btn btn-secondary">More</Link>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Showcase;
