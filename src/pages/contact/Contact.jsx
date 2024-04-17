import Header from '../../components/Header'
import HeaderImage from '../../images/IMG-20240417-WA0027.jpg'
import { MdEmail } from 'react-icons/md'
import { FaFacebook } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaWhatsapp } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import './contact.css'

const Contact = () => {
  return (
    <>
      <Header title='Get In Touch' Image={HeaderImage}></Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href='mailto:support@egattor.com' target='_blank' rel='noreferrer noopen'><MdEmail /></a>
            <a href='https://facebook.com' target='_blank' rel='noreferrer noopener'><FaFacebook /></a>
            <a href='https://facebook.com' target='_blank' rel='noreferrer noopener'><AiOutlineTwitter /></a>
            <a href='https://facebook.com' target='_blank' rel='noreferrer noopener'><FaWhatsapp /></a>
            <a href='https://facebook.com' target='_blank' rel='noreferrer noopener'><AiFillInstagram /></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
