import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footerLogo'>
                <img className='logoImg' src="../images/logo.png"/>
            </div>
            <ul className='footerLinks'>
                <Link to="/about">
                    <li className='link'>About Us</li>
                </Link>
                <Link to="/contact">
                    <li className='link'>Contact Us</li>
                </Link>
                <li className='link'>Support</li>
            </ul>
        </div>
    )
}