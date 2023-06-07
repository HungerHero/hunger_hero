import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteWarning from "../DeleteWarning/DeleteWarning";
import './HeroRequestCard.css'

export default function HeroRequestCard({ key, id, pickup, receiver, user, handleAcceptPickupRequest, handleDenyPickupRequest }) {

  const [modalHidden, setModalHidden] = useState(false);
  const navigate = useNavigate();

  console.log("IDIDID",id)
  
  function handlePostNav() {
    console.log('ID ->->', id);
    navigate(`/hero/requests/${id}`); 
  }

  function handleDelete(id) {
    setModalHidden(!modalHidden);
    console.log('ID ->->->', id);
    handleDenyPickupRequest(id);
  }

  function showModal() {
    setModalHidden(!modalHidden);
  }

  console.log('props are -> ', pickup, receiver, user);

  return(
    <div className="hero-history-card">
      <img className="hero-history-card__img" src={pickup.postInfo.photoUrl}  />
      <div className="hero-history-card__content">
        <div>
          <h4 className="hero-history-card__title">{pickup.postInfo.name}</h4>
          <div className="hero-history-card__text">
            <p className="hero-history-card__address">
            <i className="fa-solid fa-shop"></i>
            {receiver.name}, {receiver.email}
            </p>
            <p className="hero-history-card__description">
            <i className="fa-solid fa-bowl-food"></i>
            {pickup.postInfo.description}
            </p>
            <p className="hero-history-card__quantity">
            <i className="fa-solid fa-weight-scale"></i>
            {pickup.postInfo.quantity}
            </p>
            <div className="hero-history-card__info-line">
                <p className="hero-history-card__date">
                  <i className="fa-regular fa-calendar-days"></i>
                  {pickup.postInfo.availableDate}
                </p>
                <p className="hero-history-card__time">
                  <i className="fa-regular fa-clock"></i>
                  {pickup.postInfo.availableTime}
                </p>
              <span>
               <i className="fa-solid fa-phone"></i>
               {user.phoneNumber}
               </span>
            </div>
          </div>
          <h1>
          </h1>
          <div className="action-buttons">
            <div onClick={() => handlePostNav()} className="btn btn-green">
              See Pickup
            </div>
            <div onClick={showModal} className="btn btn-black">
              Reject Pickup
            </div>
          </div>
        </div>
        {modalHidden && (
          <DeleteWarning
            handleDelete={() => handleDelete(pickup._id)}
            modalHidden={modalHidden}
            showModal={showModal}
            cardType='pickup'
          />
        )}
      </div>
      <hr className="card-btm-line" />
    </div>
  )
}