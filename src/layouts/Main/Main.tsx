import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '../../components';

import classes from './Main.module.css';

const { main } = classes;

const Main = () => {
  return (
    <div className={main}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
