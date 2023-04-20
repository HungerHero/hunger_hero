import './HungryLandingPage.css';
import { Link } from "react-router-dom";
import PostCard from "../../components/PostCard/PostCard";

export default function HeroLandingPage({ user, posts }) {
  const sliceOfPosts = posts.slice(0, 4);

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
      <div className="samplePickups">
        {sliceOfPosts.length !== 0 ?
          sliceOfPosts.map((p, idx) => {
              return (
                <PostCard key={idx} name={p.name} quantity={p.quantity} description={p.description} availableTime={p.availableTime} availableDate={p.availableDate} location={p.location} photoUrl={p.photoUrl} user={p.user} curUser={user} idx={idx} post={p}/>
              )
          })
        :
        <div className="home-info">
              <h1>No Food Posts Yet</h1>
        </div>
        }
      </div>
      <Link className ="pickupBtn" to="/hero">
        <button className="learnBtn">More Pickups</button>
      </Link>
      <h1 className="sampleText2">How it works</h1>
      <div className="buttons">
        <div className="roundBtn">
          <Link to="/hero">
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
        <h2>Find a pickup</h2>
        <h2>Request pickup</h2>
        <h2>Connect</h2>
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
