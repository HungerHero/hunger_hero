import "./HeroHistoryCard.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteWarning from "../DeleteWarning/DeleteWarning";

export default function HeroHistoryCard(props) {
  const {
    id,
    name,
    quantity,
    availableTime,
    availableDate,
    location,
    description,
    phoneNumber,
    photoUrl,
    post,
    handleDeleteFood
  } = props;

  const [modalHidden, setModalHidden] = useState(false);
  const navigate = useNavigate();

  console.log("POST ->->", props);

  function handlePostNav() {
    console.log('ID ->->', id);
    navigate(`/hero/posts/${id}`); 
  }

  function handleDelete() {
    setModalHidden(!modalHidden);
    handleDeleteFood(props.id);
  }

  function showModal() {
    setModalHidden(!modalHidden);
  }

  return (
    <div className="hero-history-card">
      <img className="hero-history-card__img" src={photoUrl} alt={name} />
      <div className="hero-history-card__content">
        <div>
          <h4 className="hero-history-card__title">{name}</h4>
          <div className="hero-history-card__text">
            <p className="hero-history-card__address">
            <i className="fa-solid fa-shop"></i>
            {location}</p>
            <p className="hero-history-card__description">
            <i className="fa-solid fa-bowl-food"></i>
            {description}</p>
            <p className="hero-history-card__quantity">
            <i className="fa-solid fa-weight-scale"></i>
            {quantity}</p>
            {/* <div className="hero-history-card__info-line"> */}
                <p className="hero-history-card__date">
                  <i className="fa-regular fa-calendar-days"></i>
                  {availableDate}
                </p>
                <p className="hero-history-card__time">
                  <i className="fa-regular fa-clock"></i>
                  {availableTime}
                </p>
              {/* <span>
                <i className="fa-solid fa-phone"></i>
                {phoneNumber}
              </span> */}
            {/* </div> */}
          </div>
          <h1>
            {/* {post.user.address} */}
          </h1>
          <div className="action-buttons">
            <div onClick={() => handlePostNav()} className="btn btn-green">
              See Donation
            </div>
            <div onClick={showModal} className="btn btn-black">
              Cancel Donation
            </div>
          </div>
        </div>
        {modalHidden && (
          <DeleteWarning
            handleDelete={handleDelete}
            modalHidden={modalHidden}
            showModal={showModal}
          />
        )}
      </div>
      <hr className="card-btm-line" />
    </div>
  );
}
