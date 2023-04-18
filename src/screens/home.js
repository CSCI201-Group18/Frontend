import village from "./village.jpg";
import evk from "./evk.jpg";
import parkside from "./parkside.jpg";
import "./home.css";
import { useState} from "react";
import SquareButton from "../components/Buttons/SquareButton";
import RecButton from "../components/Buttons/RecButton";
import { Link } from "react-router-dom";

function Home() {
  const [cards] = useState([
    {
      title: "Village",
      image: village,
      link: "/vilr",
    },
    {
      title: "EVK",
      image: evk,
      link: "/evkr",
    },
    {
      title: "Parkside",
      image: parkside,
      link: "/parkr",
    },
  ]);

  return (
    <div>
      <div className="banner">
        <h1>Your recommended dining hall for today is...</h1>
      </div>
      <div className="banner">
        <RecButton className="buttonText" type="bold" name={recommendedDiningHall}/>
      </div>
      <section>
        <div className="container">
          <div className="cards">
            {cards.map((card, i) => (
              <div key={i} className="card">
                <h2>{card.title}</h2>
                <div>
                  <img src={card.image} alt={card.title} />
                </div>
                <Link to={card.link}>
                  <button className="btn">View More</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Link to="/profile">
            <SquareButton type="person" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
