import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import classes from './Footer.module.css';

const {
    brandName,
    footer,
    mediaLinks,
    established
} = classes;

const ESTABLISHED_YEAR = 2024;
const CURRENT_YEAR = new Date().getFullYear();
const YEARS_ACTIVE = CURRENT_YEAR === ESTABLISHED_YEAR ? ESTABLISHED_YEAR : `${ESTABLISHED_YEAR} - ${CURRENT_YEAR}`;

const Footer = () => {
    return (
        <footer className={footer}>
            <h3 className={brandName}>Dana Sweets <span style={{ fontFamily: 'Roboto', fontSize: '10px' }}>&reg;</span></h3>
            <div className={mediaLinks}>
                <ul>
                    <li><a href="https://www.instagram.com/danasweets.ct?igsh=QkFKQ3N5dTA2TA%3D%3D" target="_blank"><FaInstagramSquare /></a></li>
                    <li><a href="#"><FaFacebookSquare /></a></li>
                    <li><a href="#"><FaSquareXTwitter /></a></li>
                </ul>
            </div>
            <p className={established}>All rights reserved | {} <span>{YEARS_ACTIVE}</span></p>
        </footer>
    )
}

export default Footer;
