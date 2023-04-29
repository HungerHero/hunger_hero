import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import * as pickupAPI from "../../utilities/pickup-api";
import HeroRequestCard from "../../components/HeroRequestCard/HeroRequestCard";
import "./HeroRequestPage.css";

export default function HeroRequestPage(user, posts) {
  const [heroRequests, setHeroRequests] = useState([]);
  const navigate = useNavigate();

  console.log('Hero PickupUser -> ', user);
  
  useEffect(function() {
    async function getDistributorPickupRequests() {
        const distributor = user.user._id
        console.log('user -> ', distributor);
        const pickupRequests = await pickupAPI.getDistributorPickups(distributor);
        console.log('component-pickupRequests -> ', pickupRequests)
        setHeroRequests(pickupRequests);
      }
    getDistributorPickupRequests();
}, []);

  useEffect(() => {
    console.log('heroRequests updated ->', heroRequests);
  }, [heroRequests]);


  const handleBackClick = () => {
    navigate('/hero')
  }

  return (
    <div className="body">
      <div className="hero-request__title">
        <h1>Scheduled Pickups</h1>
      </div>
      {heroRequests.length !== 0 ?
        heroRequests.map(pickup => {
          return (
            <div key={pickup._id}>
              <HeroRequestCard
                key={pickup._id}
                pickup={pickup}
                receiver={pickup.receiver}
                user={user}
              />
            </div>
          );
        })
        :
        <div>
          <h1>Loading...</h1>
        </div>
      }
    </div>
  );
}