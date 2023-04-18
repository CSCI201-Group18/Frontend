import village from "./village.jpg";
import evk from "./evk.jpg";
import parkside from "./parkside.jpg";
import "./Home.css";
import { useState} from "react";
import SquareButton from "../components/Buttons/SquareButton";
import { Link } from "react-router-dom";

function HomeGuest() {
  const [cards] = useState([
    {
      title: "Village",
      image: village,
      link: "/vilu",
    },
    {
      title: "EVK",
      image: evk,
      link: "/evku",
    },
    {
      title: "Parkside",
      image: parkside,
      link: "/parku",
    },
  ]);
  return (
    <div>
      <div className="banner">
        <h1>Welcome!</h1>
      </div>
      <div className="home-text">
        <p>
          Select a dining hall to view what people rated today's menu items!
        </p>
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

export default HomeGuest;
