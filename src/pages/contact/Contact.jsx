import Header from '../../components/Header'
import HeaderImage from '../../images/about_headers.jpg'
import { MdEmail } from 'react-icons/md'
import { FaFacebook } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
// import { FaWhatsapp } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
// import { AiFillTiktok } from 'react-icons/ai'
import './contact.css'

const Contact = () => {
  return (
    <>
      <Header title='Get In Touch' Image={HeaderImage}></Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href='mailto:amphibiousmarineguard@gmail.com' target='_blank' rel='noreferrer noopen'><MdEmail /></a>
            <a href='https://www.facebook.com/profile.php?id=61558337265320&mibextid=ZbWKwL' target='_blank' rel='noreferrer noopener'><FaFacebook /></a>
            <a href='https://x.com/Amphibious7334?t=sNbhs2c6BMhxzOz2jS_DGg&s=09' target='_blank' rel='noreferrer noopener'><AiOutlineTwitter /></a>
            {/* <a href='https://facebook.com' target='_blank' rel='noreferrer noopener'><FaWhatsapp /></a> */}
            <a href='https://www.instagram.com/amphibiousmarineguard9?igsh=bWs0MjFzZjMwZDBy' target='_blank' rel='noreferrer noopener'><AiFillInstagram /></a>
            <a href='https://www.youtube.com/@AmphibiousMarineGuard' target='_blank' rel='noreferrer noopener'><AiFillYoutube /></a>
            {/* <a href='https://facebook.com' target='_blank' rel='noreferrer noopener'><AiFillTiktok /></a> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
