import React from 'react';

function Main( {onEditProfile, onAddPlace, onEditAvatar} ) {

  // const handleEditAvatarClick = () => {
  //   const popupEditAvatar = document.querySelector('.popup_type_update-avatar');
  //   popupEditAvatar.classList.add('popup_opened');
  // }
  // const handleEditProfileClick = () => {
  //   const popupEditProfile = document.querySelector('.popup_type_edit-profile');
  //   popupEditProfile.classList.add('popup_opened');
  //   }
  // const handleAddPlaceClick = () => {
  //   const popupAddPlace = document.querySelector('.popup_type_add-place');
  //   popupAddPlace.classList.add('popup_opened');
  //  }


    return (
        <main className="content">
            <section className="profile">
            <button className="profile__avatar-button" onClick={onEditAvatar}>
                <img src="#" alt="Аватар пользователя" className="profile__avatar" />
            </button>
            <div className="profile__info">
                <h1 className="profile__name" />
                <button className="profile__edit-button button-hover" type="button" onClick={onEditProfile} />
                <p className="profile__about" />
            </div>
            <button className="profile__add-button button-hover" type="button" onClick={onAddPlace} />
            </section>
            <section className="cards" aria-label="Карточки с изображением мест">
                <ul className="cards__list"></ul>
            </section>
        </main>
        );
    }
    
    export default Main;