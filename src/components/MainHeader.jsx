import { Link } from 'react-router-dom'
import Image from '../images/logo.png'

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>WELCOME TO AMPHIBIOUS MARINE GUARD LTD.</h4>
          <h1>Amphibious Marine Guard</h1>
          <p>We involve in the use of specialized equipment and technology to conduct surveillance and intelligence-gathering operations across both land and water environments.</p>
          <Link to='/contact' className='btn lg'>Reach Us</Link>
        </div>
        <div className="main__header-right">
          <div className='main__header-circle'></div>
          <div className='main__header-image'>
            <img src={Image} alt='Main Header' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader
