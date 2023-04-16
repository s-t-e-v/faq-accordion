import './style.css';
import { useState } from 'react';

function Accordion({title, content}) {

  const [show, setShow] = useState("+");

  function handleShow() {
    setShow(show === "+"? "-" : "+");
  }


  return (
    <section className='accordion'>
      <div className="accordion-front">
        <h3 className='accordion-title'>{title}</h3>
          <button className='toggle' onClick={handleShow}>{show}</button>
      </div>

      {show === "-" && (
      <p className='accordion-content'>{content}</p>
      )}
    </section>
  );
}

export default function App() {

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
    }
  ];

  return (
    <div className="App">
      <h1>Project 2: FAQ/Accordion</h1>

      <section className="faq">
        <h2>Frequently Asked Questions</h2>

        <Accordion key={0} title={faq[1].title} content={faq[0].content}/>

        <section className='accordion'>
          <div className="accordion-front">
            <h3 className='accordion-title'>How much does it cost?</h3>
            <button className='toggle'>+</button>
          </div>

          <p className='accordion-content'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste nisi magni totam explicabo quam blanditiis unde excepturi! Quam quibusdam, labore atque culpa magni deleniti quia laudantium, provident illum veritatis facilis?</p>
        </section>

        <section className='accordion'>
          <div className="accordion-front">
            <h3 className='accordion-title'>When can I get it?</h3>
            <button className='toggle'>+</button>
          </div>

          <p className='accordion-content'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste nisi magni totam explicabo quam blanditiis unde excepturi! Quam quibusdam, labore atque culpa magni deleniti quia laudantium, provident illum veritatis facilis?</p>
        </section>

        
      </section>
    </div>
  );
}
