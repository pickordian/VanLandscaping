import "../style.scss";
import BurgerMenu from "./BurgerMenu";
import { useState } from "react";
function Header() {
  const [isNavOpened, setNavOpened] = useState<boolean>(false);
  const handleLinkClick = () =>{
    setNavOpened(false);
  }
  return (
    <nav className="primary-navigation">
      <a className="logo" href="#Hero">
        Van's Landscaping{" "}
      </a>
      <ul className={isNavOpened ? "opened" : ""}>
        <li>
          {" "}
          <a href="#Services" onClick={handleLinkClick}>Services</a>
        </li>
        <li>
          {" "}
          <a href="#Gallery" onClick={handleLinkClick}>Gallery</a>
        </li>
        <li>
          {" "}
          <a href="#Contact" onClick={handleLinkClick}>Contact</a>
        </li>
        <li>
          {" "}
          <a className="CTA-link" href="tel:+14252453647">
            Call us: (425) 245-3647{" "}
          </a>
        </li>
      </ul>
      <BurgerMenu state={isNavOpened} setState={setNavOpened} />
    </nav>
  );
}

export default Header;
