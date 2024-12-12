import { Footer, Home, Navbar } from "../../components";

import classes from './Main.module.css';

const {
    main
} = classes;

const Main = () => {


  return (
    <div className={main}>
    <Navbar />
    <Home />
    <Footer />
    </div>
  )
}

export default Main;
