import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import * as pickupAPI from "../../utilities/pickup-api";
import PostCard from "../../components/PostCard/PostCard";
import ReceiverCard from "../../components/ReceiverCard/ReceiverCard";
import "./HeroRequestPage.css";

export default function HeroRequestPage(user, posts) {
  const [pickupRequests, setPickupRequests] = useState([]);
  // const [post, setPost] = useState({ posts}); /   /
  const navigate = useNavigate();
  // const p = {
  //   id: 1,
  //   name: "Bread",
  //   quantity: 10,
  //   unit: "loaves",
  //   pickupTime: "2021-05-01T00:00:00.000Z",
  //   pickupLocation: "123 Main St, San Francisco, CA 94105",
  //   description: "I need 10 loaves of bread for my soup kitchen. Please deliver by 5pm.",
  //   status: "pending",
  //   createdAt: "2021-04-01T00:00:00.000Z",
  //   updatedAt: "2021-04-01T00:00:00.000Z",
  //   userId: 1,
  //   businessId: 1,
  //   user: {
  //     id: 1,
  //     name: "John Doe",
  //     email: "",
  //     createdAt: "2021-04-01T00:00:00.000Z",
  //     updatedAt: "2021-04-01T00:00:00.000Z"
  //   }
  // }

  console.log('user -> ', user, ' posts -> ', posts);

  useEffect(function() {
    async function getPickupRequests() {
        const pickupRequests = await pickupAPI.getDistributorPickups(user.user._id);
        console.log('component-pickupRequests -> ', pickupRequests)
        setPickupRequests(pickupRequests);
      }
    getPickupRequests();
}, [user._id]);

  const handleBackClick = () => {
    navigate('/hero')
  }

  return (
    <div className="body">
      <button onClick={handleBackClick}>
        Back
      </button>
      <h1 className="order-header">Request for pick up</h1>
      <div className="order-container">
        <div className="order-distributor">
          <h2 className="request-user-title">Donation</h2>
          {/* <PostCard name={post.name} id={post.id}quantity={post.quantity} description={post.description} availableTime={post.availableTime} availableDate={post.availableDate} location={post.location} photoUrl={post.photoUrl} user={post.user}/>
        </div>
        <div className="order-receiver">
          <h2 className="request-user-title">Receiver</h2>
          <ReceiverCard name={post.name} quantity={post.quantity} description={post.description} availableTime={post.availableTime} availableDate={post.availableDate} location={post.location} photoUrl={post.photoUrl} user={post.user} /> */}
        </div>
      </div>
    </div>
  );
}