import { Footer, Navbar } from "../../components";

import classes from './Main.module.css';

const {
    main
} = classes;

const Main = () => {


  return (
    <div className={main}>
    <Navbar />
    <main></main>
    <Footer />
    </div>
  )
}

export default Main;
