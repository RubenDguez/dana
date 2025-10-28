import { Link } from 'react-router-dom';
import classes from './NotFound.module.css';

const { notFound, backHome, scalable } = classes;

const NotFound = () => {
  return (
    <main className={notFound}>
      <h1>404</h1>
      <div>
        <p>The page you are looking for was not found</p>
        <div className={backHome}>
          <p>Let&apos;s take you to the</p>
          <div className={scalable}>
            <Link to="/">Home</Link>
          </div>
          <p>page</p>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
