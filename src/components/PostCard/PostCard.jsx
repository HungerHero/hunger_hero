import './PostCard.css'
// import { createRequest } from '../../utilities/request-api'; 
import { useNavigate } from "react-router-dom";
import * as pickupAPI from '../../utilities/pickup-api';

export default function PostCard({ name, quantity, description, availableTime, availableDate, location, photoUrl, user, post}) {
  const navigate = useNavigate();
  console.log('post -> ', post, 'user -> ', user);
  async function handleCreatePickup() {
    let pickup = {
      status: 'pending',
      receiver: user,
      distributor: post.user,
      postInfo: post._id
    }
    const newPickup = await pickupAPI.createPickup(pickup);
    navigate('/requests');
  }

  return (
    <div className='food-card'>
  <div className='food-card-image'>
    <img src={photoUrl} alt='food-item' />
  </div>
  <div className='food-card-info'>
    <div className='food-card-info-item'>{name}</div>
    <div className='food-card-info-item'>{description}</div>
    <div className='food-card-info-item'>
    <i className="fa-solid fa-location-dot"></i>
      <span>{location}</span>
    </div>
    <div className='food-card-info-item'>{quantity}</div>
    <div className='food-card-info-item'>
      <i className='fa-regular fa-calendar-days'></i>
      <span>{availableDate}</span>
    </div>
    <div className='food-card-info-item'>
      <i className='fa-regular fa-clock'></i>
      <span>{availableTime}</span>
    </div>
  </div>
  {/* { user.userType === 'Hungry' &&  */}
  <button className='request-button' onClick={handleCreatePickup}>Request Pick Up</button>
  {/* } */}
</div>

  );
}