import { useState, useEffect } from 'react';
import HeroHistoryCard from '../../components/HeroHistoryCard/HeroHistoryCard';
import * as pickupAPI from '../../utilities/pickup-api';
import './HungryRequestPage.css'

export default function HungryRequestPage( { user, posts } ) {
    const [pickupRequests, setPickupRequests] = useState([]);

    useEffect(function() {
        async function getPickupRequests() {
            const pickupRequests = await pickupAPI.getReceiverPickups(user._id);
            console.log('pickupRequests -> ', pickupRequests)
            setPickupRequests(pickupRequests);
          }
        getPickupRequests();
    }, [user._id]);
    console.log("pickups -> ", pickupRequests);
   
    return (
        <>
            <div className="hungry_request_title">
              <h1>Scheduled Pickups</h1>
            </div>
            <div>
              {pickupRequests.length !== 0 ?
                pickupRequests.map((p, idx) => {
                  return (
                  <HeroHistoryCard id={p.postInfo._id} key={idx} name={p.postInfo.name} quantity={p.postInfo.quantity} description={p.postInfo.description} availableTime={p.postInfo.availableTime} availableDate={p.postInfo.availableDate} location={p.postInfo.location} photoUrl={p.postInfo.photoUrl} user={p.postInfo.user} curUser={user} idx={idx} post={p.postInfo}/>)
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