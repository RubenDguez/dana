import { FaInstagramSquare, FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';

import classes from './Footer.module.css';

const { footer, footerCols, brand, followContactUs, followLinks } = classes;

const Footer = () => {
  return (
    <footer className={footer}>
      <div className={brand}>
        <h2>
          <span>&copy;</span>Dana Sweets
        </h2>
        <p>All Rights Reserved | 2024 - {new Date().getFullYear().toString()}</p>
      </div>
      <div className={footerCols}>
        <div className={followContactUs}>
          <p>Follow us:</p>
          <div className={followLinks}>
            <a href="https://www.instagram.com/danasweets.ct">
              <FaInstagramSquare />
            </a>
            <a href="https://www.instagram.com/danasweets.ct">
              <FaFacebookSquare />
            </a>
            <a href="https://www.instagram.com/danasweets.ct">
              <FaTwitterSquare />
            </a>
          </div>
        </div>
        <div className={followContactUs}>
          <p>Contact us:</p>
          <div>
            <p><span>Tel:</span> 407-456-4567</p>
            <p><span>Email:</span> <a href="mailto:dana.sweets@gmail.com">dana.sweets@gmail.com</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
