import React from 'react';

function Card( {card, onCardClick} ) {
  function handleClick() {
    onCardClick(card);
  }

  return(
    <li className="cards__card">
      <img
        className="cards__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <button
        className="cards__delete button-hover"
        type="button">
      </button>
      <div className="cards__description">
        <h2 className="cards__name">{card.name}</h2>
        <div className="cards__like-group">
          <button
            className="cards__icon-heart button-hover"
            type="button">
          </button>
          <p className="cards__number-of-likes">{card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;
