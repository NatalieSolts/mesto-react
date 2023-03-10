import React, { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userRes, cardsRes]) => {
        setCurrentUser(userRes);
        setCards(cardsRes);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api
      .changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => console.log(err));
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      setCards((state) => state.filter((element) => element._id !== card._id));
    });
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          cards={cards}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />

        {/* Попап «Редактировать профиль» */}
        <PopupWithForm
          name="edit-profile"
          title="Редактировать профиль"
          buttonText="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="text"
            defaultValue=""
            className="popup__input popup__input_type_name"
            name="name"
            placeholder="Имя"
            required=""
            minLength="2"
            maxLength="40"
            id="name"
          />
          <span className="popup__error name-error" />
          <input
            type="text"
            defaultValue=""
            className="popup__input popup__input_type_job"
            name="job"
            placeholder="Описание деятельности"
            required=""
            minLength="2"
            maxLength="200"
            id="job"
          />
          <span className="popup__error job-error" />
        </PopupWithForm>

        {/* Попап добавить «Новое место» */}
        <PopupWithForm
          name="add-place"
          title="Новое место"
          buttonText="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="text"
            defaultValue=""
            className="popup__input popup__input_type_card-name"
            name="name"
            placeholder="Название"
            required=""
            minLength={2}
            maxLength={30}
            id="card-name"
          />
          <span className="popup__error card-name-error" />
          <input
            type="url"
            defaultValue=""
            className="popup__input popup__input_type_link"
            name="link"
            placeholder="Ссылка на картинку"
            required=""
            id="link"
          />
          <span className="popup__error link-error" />
        </PopupWithForm>

        {/* Попап подтверждения удаления карточки «Вы уверены?»*/}
        <PopupWithForm
          name="delete-card-confirmation"
          title="Вы&nbsp;уверены?"
          buttonText="Да"
          onClose={closeAllPopups}
        />

        {/* Попап «Обновить аватар» */}
        <PopupWithForm
          name="update-avatar"
          title="Обновить аватар"
          buttonText="Сохранить"
          onClose={closeAllPopups}
          isOpen={isEditAvatarPopupOpen}
        >
          <input
            type="url"
            defaultValue=""
            className="popup__input popup__input_type_avatar"
            name="avatar"
            placeholder="Ссылка на картинку"
            required=""
            id="avatar"
          />
          <span className="popup__error avatar-error" />
        </PopupWithForm>

        {/* Попап увеличить изображение */}
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
