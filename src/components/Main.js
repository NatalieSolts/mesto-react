import React from 'react';

function Main() {
    return (
        <main className="content">
            <section className="profile">
            <button className="profile__avatar-button">
                <img src="#" alt="Аватар пользователя" className="profile__avatar" />
            </button>
            <div className="profile__info">
                <h1 className="profile__name" />
                <button className="profile__edit-button button-hover" type="button" />
                <p className="profile__about" />
            </div>
            <button className="profile__add-button button-hover" type="button" />
            </section>
            <section className="cards" aria-label="Карточки с изображением мест">
                <ul className="cards__list"></ul>
            </section>
        </main>
        );
    }
    
    export default Main;