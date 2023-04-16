import './style.css';

export default function App() {
  return (
    <div className="App">
      <h1>Project 2: FAQ/Accordion</h1>

      <div className="faq">
        <h2>Frequently Asked Questions</h2>
        <section className='accordion'>
          <div className="accordion-front">
            <h3 className='accordion-title'>Is this a good product?</h3>
            <button className='toggle'>+</button>
          </div>

          <p className='accordion-content'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste nisi magni totam explicabo quam blanditiis unde excepturi! Quam quibusdam, labore atque culpa magni deleniti quia laudantium, provident illum veritatis facilis?</p>
        </section>

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

        
      </div>
    </div>
  );
}
