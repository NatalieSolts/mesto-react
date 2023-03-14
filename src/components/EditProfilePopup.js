import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose }) {
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
  );
}

export default EditProfilePopup;
