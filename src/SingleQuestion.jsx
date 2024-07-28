import { useState } from "react"

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

const SingleQuestion = (question) => {
  const {id, title, info} = question
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div key={id} className="question">
        <header>
        <h5>{title}</h5>
        <button onClick={() => setIsOpen(!isOpen)} className="question-btn" >
            {isOpen ? <AiOutlineMinus/> : <AiOutlinePlus/>}
        </button>
        </header>

        {isOpen && <p>{info}</p>}
        
        
    </div>
  )
}
export default SingleQuestion