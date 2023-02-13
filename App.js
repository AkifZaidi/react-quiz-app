import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [questions, setQuestion] = useState([
    {
      numb: 1,
      question: "Q1 : What does HTML stand for?",
      answer: "Hyper Text Markup Language",
      options: [
        "1 : Hyper Text Preprocessor",
        "2 : Hyper Text Markup Language",
        "3 : Hyper Text Multiple Language",
        "4 : Hyper Tool Multi Language",
      ],
    },
    {
      numb: 2,
      question: "Q2 : What does CSS stand for?",
      answer: "Cascading Style Sheet",
      options: [
        "1 : Common Style Sheet",
        "2 : Colorful Style Sheet",
        "3 : Computer Style Sheet",
        "4 : Cascading Style Sheet",
      ],
    },
    {
      numb: 3,
      question: "Q3 : What does PHP stand for?",
      answer: "Hypertext Preprocessor",
      options: [
        "1 : Hypertext Preprocessor",
        "2 : Hypertext Programming",
        "3 : Hypertext Preprogramming",
        "4 : Hometext Preprocessor",
      ],
    },
    {
      numb: 4,
      question: "Q4 : What does SQL stand for?",
      answer: "Structured Query Language",
      options: [
        "1 : Stylish Question Language",
        "2 : Stylesheet Query Language",
        "3 : Statement Question Language",
        "4 : Structured Query Language",
      ],
    },
    {
      numb: 5,
      question: "Q5 : What does XML stand for?",
      answer: "eXtensible Markup Language",
      options: [
        "1 : eXtensible Markup Language",
        "2 : eXecutable Multiple Language",
        "3 : eXTra Multi-Program Language",
        "4 : eXamine Multiple Language",
      ],
    },
  ]);
  const [indexNumber, setIndexNumber] = useState(0)
  const [marks, setMarks] = useState(0)
  const [reportCard, setReportCard] = useState(false)

  const AnswerChecking = (SelectedValue, CorrectValue) => {
    if (SelectedValue == CorrectValue) {
      setMarks(marks + 1)
      console.log(marks)
    }
    if (indexNumber + 1 == questions.length) {
      setReportCard(true)
    }
    setIndexNumber(indexNumber + 1)
  }
  return (
    <div className="App">
      <header className="App-header">


        {reportCard ? (<h1>Your Marks is {marks}</h1>) : (
          <div>

            <h3 className='question'>
             {questions[indexNumber].question}
            </h3>

            < hr/>
            <div className='optionDiv'>
              {questions[indexNumber].options.map((o, k) => {
                return (
                  <button key={k} className="optionButton" onClick={() => AnswerChecking(o, questions[indexNumber].answer)}>{o}</button>
                  )
                // console.log(o)
              })}
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
