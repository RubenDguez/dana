import { Link, useLocation } from 'react-router-dom';
import classes from './Navbar.module.css';

const {
    nav,
    logo,
    brand,
    buttons,
    active
} = classes;

const links = [
    {to: '/', label: 'Home'},
    {to: '/about', label: 'About'},
]

const Navbar = () => {
    const {pathname} = useLocation();

    return (
        <nav className={nav}>
            <div className={logo}>
                <img src="/image.jpeg" alt="" />
            </div>
            <div className={brand}><h1>Dana</h1></div>
            <div className={buttons}>
                {
                    links.map((link) => (
                        <Link key={link.label} to={link.to} className={pathname === link.to ? active : ''}>{link.label}</Link>
                    ))
                }
            </div>
        </nav>
    )
}

export default Navbar;
