import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import PostCard from '../../components/PostCard/PostCard'
import ReceiverCard from '../../components/ReceiverCard/ReceiverCard'
import * as pickupAPI from '../../utilities/pickup-api'
import './HeroShowRequestPage.css'
import { set } from 'mongoose'

export default function HeroShowRequestPage({ heroPickupRequests, handleAcceptPickup, handleDenyPickup }) {
  const [pickup, setPickup] = useState({})
  const { id } = useParams()
  const navigate = useNavigate()
  
  useEffect(() => {
    const pickup = heroPickupRequests.find(p => p._id === id);
    setPickup(pickup);
  }, [id, heroPickupRequests]);

  const handleBackClick = () => {
    navigate('/hero/requests')
  }

  return(
    <div className="body">
       {/* <button className='show-card-back-button' onClick={handleBackClick}><i className="fa-solid fa-arrow-left"></i></button> */}
      <h1 className="order-header">Request for pick up</h1>
      <div className="order-container">
        <div className="order-distributor">
          <h2 className="request-user-title">Donation</h2>
          {/* <PostCard name={pickup.postInfo.name} id={pickup.postInfo.id}quantity={pickup.postInfo.quantity} description={pickup.postInfo.description} availableTime={pickup.postInfo.availableTime} availableDate={pickup.postInfo.availableDate} location={pickup.postInfo.location} photoUrl={pickup.postInfo.photoUrl} user={pickup.postInfo.user}/> */}
        </div>
        <div className="order-receiver">
          <h2 className="request-user-title">Receiver</h2>
          {/* <ReceiverCard name={pickup.postInfo.name} quantity={pickup.postInfo.quantity} description={pickup.postInfo.description} availableTime={pickup.postInfo.availableTime} availableDate={pickup.postInfo.availableDate} location={pickup.postInfo.location} photoUrl={pickup.postInfo.photoUrl} user={pickup.postInfo.user} /> */}
        </div>
      </div>
    </div>
  )
}