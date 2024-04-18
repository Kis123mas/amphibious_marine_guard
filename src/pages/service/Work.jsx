import { useState } from "react"
import { AiOutlinePlus } from "react-icons/ai"
import { AiOutlineMinus } from "react-icons/ai"


const Work = ({title, desc}) => {

    const [isDescShowing, setIsDescShowing] = useState(false);

  return (
    <article className='work' onClick={() => setIsDescShowing(prev=> !prev)}>
        <div>
            <h4>{title}</h4>
            <button className="work__icon">
                {
                    isDescShowing ? <AiOutlineMinus /> : <AiOutlinePlus />
                }
            </button>
        </div>
        {isDescShowing && <p>{desc}</p>}
    </article>
  )
}

export default Work
