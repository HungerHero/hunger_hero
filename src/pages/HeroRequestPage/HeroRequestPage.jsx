import { useNavigate } from "react-router-dom";
import PostCard from "../../components/PostCard/PostCard";
import ReceiverCard from "../../components/ReceiverCard/ReceiverCard";
import "./HeroRequestPage.css";

export default function HeroRequestPage() {
  const navigate = useNavigate();
  const p = {
    id: 1,
    name: "Bread",
    quantity: 10,
    unit: "loaves",
    pickupTime: "2021-05-01T00:00:00.000Z",
    pickupLocation: "123 Main St, San Francisco, CA 94105",
    description: "I need 10 loaves of bread for my soup kitchen. Please deliver by 5pm.",
    status: "pending",
    createdAt: "2021-04-01T00:00:00.000Z",
    updatedAt: "2021-04-01T00:00:00.000Z",
    userId: 1,
    businessId: 1,
    user: {
      id: 1,
      name: "John Doe",
      email: "",
      createdAt: "2021-04-01T00:00:00.000Z",
      updatedAt: "2021-04-01T00:00:00.000Z"
    },
    business: {
      id: 1,
      name: "Whole Foods",
      email: "",
      createdAt: "2021-04-01T00:00:00.000Z",
      updatedAt: "2021-04-01T00:00:00.000Z"
    },
    messages: [
      {
        id: 1,
        content: "Hi John, I can deliver 10 loaves of bread to you by 5pm. Please let me know if this works for you.",
        createdAt: "2021-04-01T00:00:00.000Z",
        updatedAt: "2021-04-01T00:00:00.000Z",
        userId: 1,
        orderId: 1
      },
      {
        id: 2,
        content: "Hi Whole Foods, that works for me. Thank you!",
        createdAt: "2021-04-01T00:00:00.000Z",
        updatedAt: "2021-04-01T00:00:00.000Z",
        userId: 1,
        orderId: 1
      }
    ]
  }

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
          <PostCard name={p.name} id={p.id}quantity={p.quantity} description={p.description} availableTime={p.availableTime} availableDate={p.availableDate} location={p.location} photoUrl={p.photoUrl} user={p.user}/>
        </div>
        <div className="order-receiver">
          <h2 className="request-user-title">Receiver</h2>
          <ReceiverCard name={p.name} quantity={p.quantity} description={p.description} availableTime={p.availableTime} availableDate={p.availableDate} location={p.location} photoUrl={p.photoUrl} user={p.user} />
        </div>
      </div>
    </div>
  );
}