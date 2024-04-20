import Header from '../../components/Header'
import HeaderImage from '../../images/about_headers.jpg'
import StoryImage from '../../images/logo.png'
import VisionImage from '../../images/mission_image.jpg'
import MissionImage from '../../images/vision.jpg'
import './about.css'



const About = () => {
  return (
    <>
      <Header title='About Us' Image={HeaderImage}>
        {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum expedita ipsum doloremque ullam facilis eum laudantium voluptatum exercitationem, autem tempora. Eum magnam quasi maxime consectetur labore voluptas doloremque praesentium corrupti. */}
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt='Our Story' />
          </div>
          <div className="about__section-content">
            <h1>Our History</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab soluta cupiditate cum, aliquam tempora sit laudantium veniam ipsum excepturi accusamus amet optio cumque neque, quis asperiores eaque maiores nihil voluptate!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi commodi fugit voluptate deserunt vero dicta a enim ipsum fuga labore? Accusantium numquam, assumenda dolor cum accusamus ex est quod excepturi.</p>
            <p>adipisicing elit. Illo neque expedita vero, itaque quaerat iste rem dolorem labore temporibus alias nisi accusamus possimus officiis pariatur vel ipsa explicabo nesciunt! A.</p>
          </div>
        </div>
      </section>
      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab soluta cupiditate cum, aliquam tempora sit laudantium veniam ipsum excepturi accusamus amet optio cumque neque, quis asperiores eaque maiores nihil voluptate!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi commodi fugit voluptate deserunt vero dicta a enim ipsum fuga labore? Accusantium numquam, assumenda dolor cum accusamus ex est quod excepturi.</p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt='Our Vision' />
          </div>
        </div>
      </section>
      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt='Our Mission' />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab soluta cupiditate cum, aliquam tempora sit laudantium veniam ipsum excepturi accusamus amet optio cumque neque, quis asperiores eaque maiores nihil voluptate!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi commodi fugit voluptate deserunt vero dicta a enim ipsum fuga labore? Accusantium numquam, assumenda dolor cum accusamus ex est quod excepturi.</p>
            {/* <p>adipisicing elit. Illo neque expedita vero, itaque quaerat iste rem dolorem labore temporibus alias nisi accusamus possimus officiis pariatur vel ipsa explicabo nesciunt! A.</p> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default About
