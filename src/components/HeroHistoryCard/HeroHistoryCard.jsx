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
    content,
    handleDeleteElement,
  } = props;
  const [modalHidden, setModalHidden] = useState(false);
  const navigate = useNavigate();

  function handlePostNav() {
    console.log('ID ->->', id);
    navigate(`/hero/posts/${id}`);
  }

  function handleDelete() {
    setModalHidden(!modalHidden);
    handleDeleteElement(props.id);
  }

  function showModal() {
    setModalHidden(!modalHidden);
  }

  return (
    <div key={id} className="hero-history-card">
      <img className="hero-history-card__img" src={photoUrl} alt={name} />
      <div className="hero-history-card__content">
        <div>
          <h4 className="hero-history-card__title">{name}</h4>
          <p className="hero-history-card__address">{location}</p>
          <p className="hero-history-card__description">{description}</p>
          <p className="hero-history-card__quantity">{quantity}</p>
          <div className="hero-history-card__info-line">
            <span>
              <i className="fa-regular fa-calendar-days"></i>
              {availableDate}
            </span>
            <span>
              <i className="fa-regular fa-clock"></i>
              {availableTime}
            </span>
            <span>
              <i className="fa-solid fa-phone"></i>
              {phoneNumber}
            </span>
          </div>
          <div className="action-buttons">
            <div onClick={() => handlePostNav()} className="btn btn-green">
              See Post
            </div>
            <div onClick={showModal} className="btn btn-black">
              Need to Cancel?
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
