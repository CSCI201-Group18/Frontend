import village from './village.jpg';
import evk from './evk.jpg';
import parkside from './parkside.jpg';
import './home.css';
import { useState } from 'react';


function Home() {
  const [cards] = useState([
    {
      title: 'Village',
      text: 'Dining Hall',
      image: village
    },
    {
      title: 'EVK',
      text: 'Dining Hall',
      image: evk
    },
    {
      title: 'Parkside',
      text: 'Dining Hall', 
      image: parkside
    },
  ])
  return (
  
    <div>
      <section>
        <div className="container">
          <h1>Dining Halls</h1>
          <div className="cards">
            {
              cards.map((card, i) => (
              <div key ={i} className="card">
                <h2>{card.title}</h2>
                <div>
                  <img src={card.image} alt={card.title}/>
                </div>
                <p>{card.text}</p>
                <button className="btn">View More</button>
              </div> 
              ))
            }
          </div>
        </div>
      </section>
    </div>
  );

}

export default Home;
