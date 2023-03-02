import React from 'react';

function Card(card) {
  function handleClick() {
    card.onCardClick(card);
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
        <h2 className="cards__name">{card.title}</h2>
        <div className="cards__like-group">
          <button
            className="cards__icon-heart button-hover"
            type="button">
          </button>
          <p className="cards__number-of-likes">{card.likes}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;
