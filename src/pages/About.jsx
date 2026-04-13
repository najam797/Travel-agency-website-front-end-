import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

/* ── Sub-component: About Info ── */
function AboutInfo() {
  return (
    <div>
      <h2 className="lg-heading text-black about-heading">About Us</h2>
      <p className="text-gray">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam pariatur,
        eum veritatis minima tempore laborum ad aspernatur quod itaque. Nostrum.
      </p>
      <div className="about-wrapper">
        <div className="left">
          <ul>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit.</li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ── Sub-component: Stats / Counts ── */
function Counts() {
  const stats = [
    { number: '2500', label: 'Travelled' },
    { number: '500',  label: 'Places'    },
    { number: '400',  label: 'Guide'     },
    { number: '20',   label: 'Sport'     },
  ];

  return (
    <div className="counts">
      {stats.map((stat, index) => (
        <div key={index} className={`count-item count-item${index + 1}`}>
          <span>{stat.number}</span>
          <p>{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

/* ── Sub-component: CTA Banner ── */
function CTABanner() {
  return (
    <div className="cta-banner">
      <div className="cta-banner-left">
        <p className="cta-line">What are you waiting for, reach us right now.</p>
      </div>
      <div className="cta-banner-right">
        <Link to="/contact" className="btn-cta">Contact Us</Link>
      </div>
    </div>
  );
}

/* ── About Page ── */
function About() {
  return (
    <>
      <nav className="navbar bg-dark">
        <Navbar />
      </nav>
      <section className="about">
        <div className="container">
          <AboutInfo />
          <Counts />
          <CTABanner />
        </div>
      </section>
    </>
  );
}

export default About;
