import Header from '../../components/Header'
import HeaderImage from '../../images/service.jpg'
import { work } from "../../data"
import Work from "./Work"
import './service.css'

const Service = () => {
  return (
    <>
      <Header title='What We Have To Offer!' Image={HeaderImage}></Header>
      <section className="works">
        <div className="container works__container">
          {/* <SectionHead title='What We Have To Offer!' /> */}
          <div className="works__wrapper">
            {
              work.map(({ id, title, desc }) => {
                return <Work key={id} title={title} desc={desc} />
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Service
