import './PostCard.css'
import { createRequest } from '../../utilities/request-api'; 

export default function PostCard({ name, quantity, description, availableTime, availableDate, location, photoUrl, user, curUser, post}) {



  const handleRequest = async () => {
    // populate both hungry and hero userType request pages with requestCard component
    console.log(post, curUser)
    let request = {
      status: 'pending',
      requester: curUser._id,
      postInfo: post._id
    }
    console.log(request, "request info")
    // evt.preventDefault();
    try {
      const requestData = await createRequest(request);
      console.log(requestData)
    } catch {
      console.log("Failed to create request");
    }
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
  { curUser.userType === 'Hungry' && 
  <button className='request-button' onClick={handleRequest}>Request Pick Up</button>
  }
</div>

  );
}