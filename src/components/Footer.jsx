import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
import { FaFacebook } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer>
            <div className="container footer__container">
                <article>
                    <Link to='/' className='logo'>
                        <img src={Logo} alt='Footer Logo' />
                    </Link>
                    <p>We involve in the use of specialized equipment and technology to conduct surveillance and intelligence-gathering operations across both land and water environments.</p>
                    <div className='footer__socials'>
                        <a href='https://www.facebook.com/profile.php?id=61558337265320&mibextid=ZbWKwL' target='_blank' rel='noreferrer noopener'><FaFacebook/></a>
                        <a href='https://x.com/Amphibious7334?t=sNbhs2c6BMhxzOz2jS_DGg&s=09' target='_blank' rel='noreferrer noopener'><AiOutlineTwitter/></a>
                        <a href='https://www.instagram.com/amphibiousmarineguard9?igsh=bWs0MjFzZjMwZDBy' target='_blank' rel='noreferrer noopener'><AiFillInstagram/></a>
                    </div>
                </article>
                <article>
                    <h4>Premalinks</h4>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/services'>Services</Link>
                    <Link to='/staffs'>Staffs</Link>
                    <Link to='/contact'>Contact</Link>
                </article>
                <article>
                    <h4>Insight</h4>
                    <Link to='/s'>how to ...</Link>
                    <Link to='/s'>how to ...</Link>
                    <Link to='/s'>how to ...</Link>
                    <Link to='/s'>how to ...</Link>
                    <Link to='/s'>how to ...</Link>
                </article>
                <article>
                    <h4>Get In Touch</h4>
                    <Link to='/contact'>Contact Us</Link>
                    <Link to='/s'>Support</Link>
                </article>
            </div>
            <div className='footer__copyright'>
                <small>2024 AMPHIBIOUS MARINE GUARD LTD &copy; All Right Reserved</small>
            </div>
        </footer>
    )
}

export default Footer
