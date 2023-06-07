import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import * as pickupAPI from "../../utilities/pickup-api";
import HeroRequestCard from "../../components/HeroRequestCard/HeroRequestCard";
import "./HeroRequestPage.css";

export default function HeroRequestPage({user, heroPickupRequests, setHeroPickupRequests, handleAcceptPickupRequest, handleDenyPickupRequest}) {
  
  const navigate = useNavigate();

  console.log('Hero requests -> ', heroPickupRequests);

  const handleBackClick = () => {
    navigate('/hero')
  }

  return (
    <div className="body">
  <div className="hero-request__title">
    <h1>Scheduled Pickups</h1>
  </div>
  <hr />
  {heroPickupRequests.length !== 0 ? (
    heroPickupRequests.map(pickup => {
      if (pickup.status === 'pending') {
        return (
          <div key={pickup._id}>
            <HeroRequestCard
              key={pickup._id}
              id={pickup._id}
              pickup={pickup}
              receiver={pickup.receiver}
              user={user}
              handleAcceptPickupRequest={handleAcceptPickupRequest}
              handleDenyPickupRequest={handleDenyPickupRequest}
            />
          </div>
        );
      } else {
        return null; // Render nothing for accepted or denied pickups in the Scheduled section
      }
    })
  ) : (
    <div>
      <h1>Loading...</h1>
    </div>
  )}
  <hr />
  <div className="hero-request__title">
    <h1>Accepted Pickups</h1>
  </div>
  <hr />
  {heroPickupRequests.length !== 0 ? (
    heroPickupRequests.map(pickup => {
      if (pickup.status === 'accepted') {
        return (
          <div key={pickup._id}>
            <HeroRequestCard
              key={pickup._id}
              id={pickup._id}
              pickup={pickup}
              receiver={pickup.receiver}
              user={user}
              handleAcceptPickupRequest={handleAcceptPickupRequest}
              handleDenyPickupRequest={handleDenyPickupRequest}
            />
          </div>
        );
      } else {
        return null; // Render nothing for non-accepted pickups in the Accepted section
      }
    })
  ) : (
    <div>
      <h1>Loading...</h1>
    </div>
  )}
  <hr />
  <div className="hero-request__title">
    <h1>Denied Pickups</h1>
  </div>
  <hr />
  {heroPickupRequests.length !== 0 ? (
    heroPickupRequests.map(pickup => {
      if (pickup.status === 'denied') {
        return (
          <div key={pickup._id}>
            <HeroRequestCard
              key={pickup._id}
              id={pickup._id}
              pickup={pickup}
              receiver={pickup.receiver}
              user={user}
              handleAcceptPickupRequest={handleAcceptPickupRequest}
              handleDenyPickupRequest={handleDenyPickupRequest}
            />
          </div>
        );
      } else {
        return null; // Render nothing for non-denied pickups in the Denied section
      }
    })
  ) : (
    <div>
      <h1>Loading...</h1>
    </div>
  )}
</div>
  );
}