import { useState } from "react";
import Logo from "../images/header/logo.svg";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // 👇️ toggle isActive state variable
    setIsActive((current) => !current);
  };

  return (
    <header className="header overall-layout padd sec-flex">
      <nav className="header__nav">
        <a href="#" className="header__nav--logo">
          <img src={Logo} alt="Logo" />
        </a>

        <div className="header__nav--hamburger" onClick={handleClick}>
          <div className={`line-1 ${isActive && "line-1-toggled"}`}></div>
          <div className={`line-2 ${isActive && "line-2-toggled"}`}></div>
        </div>

        <ul className={`header__nav--links ${isActive && "display-nav"}`}>
          <a href="#" className="header__nav--links__link">
            Home
          </a>
          <a
            href="gallery.html"
            className="header__nav--links__link"
            target="_blank"
          >
            Gallery
          </a>
          <a
            href="pricing.html"
            className="header__nav--links__link"
            target="_blank"
          >
            Pricing
          </a>
          <a
            href="schedule.html"
            className="header__nav--links__link"
            target="_blank"
          >
            Schedule
          </a>
          <a
            href="speakers.html"
            className="header__nav--links__link"
            target="_blank"
          >
            Speakers
          </a>
          <a
            href="blog.html"
            className="header__nav--links__link"
            target="_blank"
          >
            Blog
          </a>
          <a
            href="contact.html"
            className="header__nav--links__link"
            target="_blank"
          >
            Contact
          </a>
        </ul>

        <a href="pricing.html" className="header__nav--cta sec-link">
          Get tickets <i className="fa-solid fa-ticket"></i>
        </a>
      </nav>

      <section className="header__hero">
        <p className="header__hero--location">
          <i className="fa-solid fa-location-dot"></i>
          WaterFront Hotel, London
        </p>

        <h1 className="header__hero--title">
          The Largest Conference In <span>Europe</span>
        </h1>

        <p className="header__hero--para sec-para">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo,
          minima.
          <span>Lorem ipsum dolor sit, amet consectetur adipisicing.</span>
        </p>

        <a href="pricing.html" className="header__hero--tickets-link sec-link">
          Buy Ticket Now
        </a>
      </section>
    </header>
  );
};

export default Header;
