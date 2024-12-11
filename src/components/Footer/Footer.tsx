import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import classes from './Footer.module.css';

const {
    brandName,
    footer,
    mediaLinks
} = classes;

const Footer = () => {
    return (
        <footer className={footer}>
            <h3 className={brandName}>Dana Sweets <span style={{ fontFamily: 'Roboto' }}>&reg;</span></h3>
            <div className={mediaLinks}>
                <ul>
                    <li><a href="#"><FaInstagramSquare /></a></li>
                    <li><a href="#"><FaFacebookSquare /></a></li>
                    <li><a href="#"><FaSquareXTwitter /></a></li>
                </ul>
            </div>
            <p>All rights reserved | { new Date().getFullYear().toString() }</p>
        </footer>
    )
}

export default Footer;
