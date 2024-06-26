import { values } from '../data'
import Image from '../images/valuess.jpg'
import SectionHead from './SectionHead'
import { GiCutDiamond } from 'react-icons/gi'
import Card from '../UI/Card'

const Values = () => {
    return (
        <section className='values'>
            <div className="container values__container">
                <div className="values__left">
                    <div className="values__image">
                        <img src={Image} alt='value' />
                    </div>
                </div>
                <div className="values__right">
                    <SectionHead icon={<GiCutDiamond />} title='values' />
                    <p>
                        Amphibious surveillance also refers to the capability of conducting surveillance activities both on land and in water.
                    </p>
                    <div className="values__wrapper">
                        {
                            values.map(({id, icon, title, desc}) => {
                                return <Card key={id} className="values__value">
                                    <span>{icon}</span>
                                    <h4>{title}</h4>
                                    <small>{desc}</small>
                                </Card>
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Values
