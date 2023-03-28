import { Link } from 'react-router-dom';
import logo from '../images/craft-logo.jpg';

import './styles/navbar.css'


export default function Navbar(){



    return (
        <div id="nav-page">
            <img src={logo} alt="The Crafty Creations Club" id="craft-logo"/>
            <ul id="nav-links">
                <Link to="/"><li>Home</li></Link>
                <Link to="/products"><li>Products</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
                <Link to ="https://www.facebook.com/profile.php?id=100084930500589" target="_blank"><li>Facebook</li></Link>
            </ul>
        </div>
    )
}