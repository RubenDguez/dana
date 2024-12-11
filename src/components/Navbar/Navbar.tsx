import classes from './Navbar.module.css';

const { nav, logo, brandName, slogan, brandWrapper } = classes;

const Navbar = () => {
  return (
    <nav className={nav}>
      <img className={logo} src="image.png" alt="dana logo" />
      <div className={brandWrapper}>
        <h2 className={brandName}>Dana</h2>
        <div className={slogan}>
          <p><span>Artisanal Pastries</span></p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
