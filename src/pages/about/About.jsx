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
            <p>Amphibious Marine Guard is Initiated by the CEO Hon. Prince John Okorosa, a native of Calabari in the Niger Delta region, Amphibious Marine Guard (AMG) was born out of a deep understanding of the region's terrain and security challenges. With firsthand knowledge of the area's complexities and the urgent need for enhanced security measures, Hon. Prince John recognized the importance of community involvement in addressing these issues.</p>
            <p>Having collaborated with various petroleum crime agencies such as PTD and PENGACINE, as well as surveillance divisions in the Niger Delta, Hon. Prince John's experience extends to his tenure as a youth leader in the region. It became evident that effective security solutions required collective efforts beyond individual initiatives.</p>
            <p>AMG's mission transcends borders, forging partnerships with foreign experts to combat social vices causing economic harm in the area. In addition to its proactive approach to security, AMG provides essential security gadgets to support other agencies in their operations.</p>
            <p>By leveraging local talent, advanced technology, and strategic partnerships, AMG aims to significantly reduce crime rates and safeguard the economic prosperity of the Niger Delta and beyond.</p>
          </div>
        </div>
      </section>
      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>Our vision at Amphibious Marine Guard is to create a safer, more secure environment in the Niger Delta region and Nigeria at large, where individuals, communities, and businesses can thrive without fear of criminal activities. We aspire to be a trusted leader in security services, known for our integrity, professionalism, and unwavering dedication to the well-being of the people and the prosperity of the nation.</p>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi commodi fugit voluptate deserunt vero dicta a enim ipsum fuga labore? Accusantium numquam, assumenda dolor cum accusamus ex est quod excepturi.</p> */}
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
            <p>At Amphibious Marine Guard, our mission is to safeguard the Niger Delta region and beyond through innovative security solutions, community engagement, and strategic partnerships. We are committed to combating crime, promoting stability, and fostering socio-economic development for the prosperity of present and future generations.</p>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi commodi fugit voluptate deserunt vero dicta a enim ipsum fuga labore? Accusantium numquam, assumenda dolor cum accusamus ex est quod excepturi.</p> */}
            {/* <p>adipisicing elit. Illo neque expedita vero, itaque quaerat iste rem dolorem labore temporibus alias nisi accusamus possimus officiis pariatur vel ipsa explicabo nesciunt! A.</p> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default About
