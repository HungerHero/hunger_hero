import './HeroShowRequestPage.scss'

export default function HeroShowRequestPage() {
  return(
    <div className="body">
       <button className='show-card-back-button' onClick={handleBackClick}><i className="fa-solid fa-arrow-left"></i></button>
      <h1 className="order-header">Request for pick up</h1>
      <div className="order-container">
        <div className="order-distributor">
          <h2 className="request-user-title">Donation</h2>
          <PostCard name={post.name} id={post.id}quantity={post.quantity} description={post.description} availableTime={post.availableTime} availableDate={post.availableDate} location={post.location} photoUrl={post.photoUrl} user={post.user}/>
        </div>
        <div className="order-receiver">
          <h2 className="request-user-title">Receiver</h2>
          <ReceiverCard name={post.name} quantity={post.quantity} description={post.description} availableTime={post.availableTime} availableDate={post.availableDate} location={post.location} photoUrl={post.photoUrl} user={post.user} />
        </div>
      </div>
    </div>
  )
}