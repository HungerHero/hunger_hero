import { useState, useEffect } from 'react';
import PickupRequestCard from '../../components/PickupRequestCard/PickupRequestCard';
import * as pickupAPI from '../../utilities/pickup-api';
import './HungryRequestPage.css'

export default function HungryRequestPage( { user, pickupRequests, setPickupRequests } ) {
    
    console.log(user, ' <- user');

    
    console.log("pickups -> ", pickupRequests);

    async function handleDeletePickupRequest(id) {
      await pickupAPI.deletePickup(id);
      setPickupRequests(pickupRequests.filter(p => p._id !== id));
    }
   
    return (
        <>
            <div className="hungry_request_title">
              <h1>Scheduled Pickups</h1>
            </div>
            <div>
              {pickupRequests.length !== 0 ?
                pickupRequests.map((p, idx) => {
                  return (
                  <PickupRequestCard id={p._id} key={idx} name={p.postInfo.name} quantity={p.postInfo.quantity} description={p.postInfo.description} availableTime={p.postInfo.availableTime} availableDate={p.postInfo.availableDate} location={p.postInfo.location} photoUrl={p.postInfo.photoUrl} postUser={p.postInfo.user} user={user} handleDeletePickupRequest={handleDeletePickupRequest} post={p.postInfo}/>)
              })
            :
            <div>
              <h1>No Food Posts Yet</h1>
              <h2>Be the first to post!</h2>
            </div>
            }
            </div>
        </>
    )
}