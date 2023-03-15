import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name="update-avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      onClose={onClose}
      isOpen={isOpen}
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
  );
}

export default EditAvatarPopup;
