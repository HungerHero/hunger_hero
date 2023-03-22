import './ReceiverCard.css'

export default function ReceiverCard({ user, location, quantity, name, availableTime }) {
return (
  <div className="receiver-card">
    <img className='receiver-card-img' src="../../images/heroPic.jpeg" alt="animage" />
    <div className="receiver-card-header">
      <div className="receiver-card-header-item">
        {/* <span>{user.name}</span> */} St. Johns Non- Profit
      </div>
    </div>
    <div className="receiver-card-body">
      <div className="receiver-card-header-item">
        {/* <span>{location}</span> */} 123 Main St 94022, Sacramento CA
      </div>
      <div className="receiver-card-body-item">
        {/* <span>{user.phoneNumber}</span> */} (555)222-3333
      </div>
      <div className="receiver-card-body-item">
        <span>{user.email}</span> st.johns@services.org
      </div>
      <div className="receiver-card-body-item">
        <p>Message:</p>
        <textarea>
          Hi Name, I can pickup Quantity of Food to you by Time. Please let me know if this works for you.
        </textarea>
      </div>
      <div className="receiver-card-buttons">
        <button className="receiver-card-accept-btn">Accept Request
        </button>
        <button className="receiver-card-cancel-btn">
          Cancel
        </button>
      </div>
    </div>
  </div>
)}