import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
import { FaFacebook } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaWhatsapp } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer>
            <div className="container footer__container">
                <article>
                    <Link to='/' className='logo'>
                        <img src={Logo} alt='Footer Logo' />
                    </Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eius ipsum, corrupti ipsam sit dolor enim vitae facere doloribus? Vel expedita repellendus eum amet laboriosam cupiditate dolor maxime numquam iusto!</p>
                    <div className='footer__socials'>
                        <a href='https://facebook.com' target='_blank' rel='noreferrer noopener'><FaFacebook/></a>
                        <a href='https://facebook.com' target='_blank' rel='noreferrer noopener'><AiOutlineTwitter/></a>
                        <a href='https://facebook.com' target='_blank' rel='noreferrer noopener'><FaWhatsapp/></a>
                        <a href='https://facebook.com' target='_blank' rel='noreferrer noopener'><AiFillInstagram/></a>
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
