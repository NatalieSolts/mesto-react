import { useState, useEffect, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose }) {
  const currentUser = useContext(CurrentUserContext); // Подписка на контекст
  const [name, setName] = useState(currentUser);
  const [description, setDescription] = useState(currentUser);

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  // Обработчик изменения инпута обновляет стейт
  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  return (
    // Попап «Редактировать профиль»
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
    >
      <input
        type="text"
        className="popup__input popup__input_type_name"
        name="name"
        placeholder="Имя"
        required=""
        minLength="2"
        maxLength="40"
        id="name"
        value={name}
        onChange={handleChangeName}
      />
      <span className="popup__error name-error" />
      <input
        type="text"
        className="popup__input popup__input_type_job"
        name="job"
        placeholder="Описание деятельности"
        required=""
        minLength="2"
        maxLength="200"
        id="job"
        value={description}
        onChange={handleChangeDescription}
      />
      <span className="popup__error job-error" />
    </PopupWithForm>
  );
}

export default EditProfilePopup;
