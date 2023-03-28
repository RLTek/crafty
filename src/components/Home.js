
import {Link} from 'react-router-dom';

import './styles/Home.css';
import Navbar from './navbar'

function Home() {
  return (
    <div className="App">
      <Navbar />
      <div id ="company-name">
        <h1>
          The Crafty Creations Club
        </h1>
      </div>
      <h2>Creating experiences that build your child's confidence!</h2>
      <h3>Explore our <Link to="/products">products</Link>!</h3>
      <h3>Make sure to visit our <Link to="https://www.facebook.com/profile.php?id=100084930500589" target="_blank">Facebook</Link> to like and follow us!</h3>
    </div>
  );
}

export default Home;
