import village from './village.jpg';
import evk from './evk.jpg';
import parkside from './parkside.jpg';
import './home.css';
import { useState } from 'react';
import SquareButton from '../components/Buttons/SquareButton'
import RecButton from '../components/Buttons/RecButton';

const RedirectFunction = () => {
    return true;
}

function Home() {
  const [cards] = useState([
    {
      title: 'Village',
      //text: 'Dining Hall',
      image: village
    },
    {
      title: 'EVK',
      //text: 'Dining Hall',
      image: evk
    },
    {
      title: 'Parkside',
      //text: 'Dining Hall', 
      image: parkside
    },
  ])
  return (
    <div>
      <div className="banner">
          <h1>Your recommended dining hall for today is...</h1>
      </div>
      <div className='banner'>
        <RecButton type="bold" name="Village"/>
      </div>
      <section>
        <div className="container">
          <div className="cards">
            {
              cards.map((card, i) => (
              <div key ={i} className="card">
                <h2>{card.title}</h2>
                <div>
                  <img src={card.image} alt={card.title}/>
                </div>
                {/* <p>{card.text}</p> */}
                <button className="btn">View More</button>
              </div> 
              ))
            }
          </div>
        </div>
        <div><SquareButton type="person" onClick={RedirectFunction}/></div>
      </section>
    </div>
  );

}

export default Home;
