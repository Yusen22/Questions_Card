import { useEffect, useState } from 'react';
import data from './data'
import SingleQuestion from './SingleQuestion';

const App = () => {
  const [questions, setQuestions] = useState(data)
  const [activeId, setActiveId] = useState(null)

  console.log(data)

  const toggleQuestion = (id) => {
    const newActiveId = id === activeId?null: id;
      setActiveId(newActiveId);
  }
  return (
    

    <main>
    <h2 className="title">Accordion Starter</h2>
    <div className='container'>
    
    {questions.map((question) => {
      return (
        <SingleQuestion key={question.id} activeId={activeId} toggleQuestion={toggleQuestion} {...question}></SingleQuestion>
      )
    })}
    </div>
    </main>
  )
};

export default App;
