import {Link} from 'react-router-dom';

import Navbar from './navbar'
import './styles/contact.css';


export default function Contact() {

   



    return(
        <div id="contact-page">
            <Navbar />
            <h3>Need to get in touch with us? Want a custom order? Fill out the form below and let us know!</h3>

            <form id="contact-form" 
            action="mailto:Thecraftycreationsclub@gmail.com.com?subject= Crafty Question"
            method="POST"
            enctype="text/plain"
            name="EmailForm">
                <div>
                    <label for="name">Name: </label>
                    <input type="text" id="name" name="name"></input>
                </div>
                <div>
                    <label for="phone" >Phone: </label>
                    <input type="text" id="phone" name="phone"></input>
                </div>
                <div>
                    <label for="email" >Email: </label>
                    <input type="text" id="email" name="email"></input>
                </div>
                <label for="help" >How can we help you?</label>
                <div>
                    <textarea id="help" name="help"></textarea>
                </div>
                <div>
                    <input type="submit" value="Send"></input>
                </div>
            </form>
            <h3>You can also contact us through our <Link to="https://www.facebook.com/profile.php?id=100084930500589">Facebook Page</Link>!</h3>
        </div>
    )
}