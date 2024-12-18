import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link to="/counter">Counter App</Link>
        </li>
        <li>
        <Link to="/stopwatch">stopwatch app</Link>  
        </li>
        <li>
        <Link to="/refEx">refex</Link>  
        </li>
      </ul>
    </div>
  );
};

export default Home;
