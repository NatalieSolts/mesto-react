import React from "react";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick }) {
  const currentUser = useContext(CurrentUserContext);
  // Определяем, являемся ли мы владельцем текущей карточки:
  const isOwn = card.owner._id === currentUser._id;
  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `card__like-button ${
    isLiked && "card__like-button_active"
  }`;

  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="cards__card">
      <img
        className="cards__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      {/* используем переменную для условного рендеринга */}
      {isOwn && (
        <button className="cards__delete button-hover" type="button"></button>
      )}
      <div className="cards__description">
        <h2 className="cards__name">{card.name}</h2>
        <div className="cards__like-group">
          <button
            className="cards__icon-heart button-hover"
            type="button"
          ></button>
          <p className="cards__number-of-likes">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
