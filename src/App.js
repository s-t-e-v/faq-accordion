import './style.css';
import { useState } from 'react';

/** FAQ content */
const faq = [
  {
    title: 'Is this a good product?',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste nisi magni totam explicabo quam blanditiis unde excepturi! Quam quibusdam, labore atque culpa magni deleniti quia laudantium, provident illum veritatis facilis?'
  },
  {
    title: 'How much does it cost?',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste nisi magni totam explicabo quam blanditiis unde excepturi! Quam quibusdam, labore atque culpa magni deleniti quia laudantium, provident illum veritatis facilis?'
  },
  {
    title: 'When can I get it?',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste nisi magni totam explicabo quam blanditiis unde excepturi! Quam quibusdam, labore atque culpa magni deleniti quia laudantium, provident illum veritatis facilis?'
  },
];

function Accordion({title, content}) {

  const [state, setState] = useState("+");

  function handleShow() {
    setState(state === "+"? "-" : "+");
  }

  return (
    <section className='accordion'>
      <div className="accordion-front">
        <h3 className='accordion-title'>{title}</h3>
        <button className='toggle' onClick={handleShow}>{state}</button>
      </div>
      {state === "-" && <p className='accordion-content'>{content}</p>}
    </section>
  );
}

export default function App() {

  return (
    <div className="App">
      <h1>Project 2: FAQ/Accordion</h1>

      <section className="faq">
        <h2>Frequently Asked Questions</h2>

        {faq.map(
          (question, index) => <Accordion key={index} title={question.title} content={question.content}/>
        )}
        
      </section>
    </div>
  );
}
