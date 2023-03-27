import { Link } from 'react-router-dom';
import logo from '../images/craft-logo.jpg';

import './styles/navbar.css'


export default function Navbar(){



    return (
        <div id="nav-page">
            <img src={logo} alt="The Crafty Creations Club" id="craft-logo"/>
            <ul id="nav-links">
                <Link to="/"><li>Home</li></Link>
                <Link><li>Products</li></Link>
                <Link><li>Contact</li></Link>
                <Link><li>Facebook</li></Link>
            </ul>
        </div>
    )
}