import './HungryLandingPage.css';
import { Link } from "react-router-dom";

export default function HeroLandingPage() {
  return (
    <div className="body">
      <div className="heroBanner">
        <div className="about">
          <div className="text">
            <h1>See what's available today</h1>
            <br />
            <Link to="/hero">
              <button className="learnBtn">Learn More</button>
            </Link>
          </div>
        </div>
        <div className="imgDiv">
          <img className="img" src="./images/charity2.png" alt="" />
        </div>
      </div>
      <h1 className="sampleText">Available pickups</h1>
      <div className="sampleItems">
        <img src="./images/image1.png" alt="" />
        <img src="./images/image2.png" alt="" />
        <img src="./images/image.png" alt="" />
        <img src="./images/image5.png" alt="" />
      </div>
      <h1 className="sampleText2">How you can help</h1>
      <div className="buttons">
        <div className="roundBtn">
          <Link to="/hero/create">
            <img src="./images/icon3.png" alt="" />
          </Link>
        </div>
        <div className="roundBtn">
          <Link to="/requests">
            <img src="./images/icon.png" alt="" />
          </Link>
        </div>
        <div className="roundBtn">
          <Link>
            <img src="./images/icon2.png" alt="" />
          </Link>
        </div>
      </div>
      <div className="buttonsText">
        <h2>Create a post</h2>
        <h2>Accept pickup request</h2>
        <h2>Donate goods</h2>
      </div>
      <div className="facts">
        <img className="factsImg" src="./images/factsImg.png" />
        <div className="factsText">
          <p>Approximately one third of all food produced in the world is wasted every year, amounting to approximately 1.3 billion tons. This food waste contributes to resource depletion, greenhouse gas emissions, and economic losses, as well as exacerbating global hunger and poverty. Reducing food waste is an important part of addressing these challenges and creating a more sustainable food system.</p>
        </div>
      </div>
    </div>
  );
}
