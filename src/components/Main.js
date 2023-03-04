import React, {useState, useEffect} from 'react';
import api from '../utils/api';
import Card from './Card';

function Main( {onEditProfile, onAddPlace, onEditAvatar, onCardClick} ) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userRes, cardsRes]) => {
        setUserName(userRes.name);
        setUserDescription(userRes.about);
        setUserAvatar(userRes.avatar);
        setCards(cardsRes);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <button className="profile__avatar-button" onClick={onEditAvatar} >
            <img src={userAvatar} alt="Аватар пользователя" className="profile__avatar" />
        </button>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button className="profile__edit-button button-hover" type="button" onClick={onEditProfile} />
          <p className="profile__about">{userDescription}</p>
        </div>
        <button className="profile__add-button button-hover" type="button" onClick={onAddPlace} />
      </section>
      <section className="cards" aria-label="Карточки с изображением мест">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card
            card={card}
              // title={card.name}
              // likes={card.likes.length}
              // link={card.link}
              key={card._id}
              onCardClick={onCardClick}

              // onCardClick={onCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
