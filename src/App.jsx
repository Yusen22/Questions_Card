import { useState } from 'react';
import data from './data'
import SingleQuestion from './SingleQuestion';

const App = () => {
  const [questions, setQuestions] = useState(data)
  return (
    

    <main>
    <h2 className="title">Accordion Starter</h2>
    <div className='container'>
    
    {questions.map((question) => {
      return (
        <SingleQuestion {...question}></SingleQuestion>
      )
    })}
    </div>
    </main>
  )
};

export default App;
