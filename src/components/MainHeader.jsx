import { Link } from 'react-router-dom'
import Image from '../images/logo.png'

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>WELCOME TO AMPHIBIOUS MARINE GUARD LTD.</h4>
          <h1>Amphibious Surveillance</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae deserunt, ratione ipsam totam animi libero quis quia sint, unde sequi mollitia fugit excepturi maxime corrupti? Magnam atque nulla esse quidem.
          </p>
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
