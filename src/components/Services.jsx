import { FaCrown } from 'react-icons/fa'
import SectionHead from './SectionHead'
import { services } from '../data'
import { Link } from 'react-router-dom'
import { AiFillCaretRight } from 'react-icons/ai'
import Card from '../UI/Card'

const Services = () => {
    return (
        <section className="services">
            <div className='container services__container'>
                <SectionHead icon={<FaCrown />} title='What We Do' />
                <div className='service__wrapper'>
                    {
                        services.map(({ id, icon, title, info, path }) => {
                            return (
                                <Card className="services__program" key={id}>
                                    <span>{icon}</span>
                                    <h4>{title}</h4>
                                    <small>{info}</small>
                                    <Link to={path} className='btn sm'>Know More <AiFillCaretRight /></Link>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Services
