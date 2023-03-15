import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name="add-place"
      title="Новое место"
      buttonText="Создать"
      isOpen={isOpen}
      onClose={onClose}
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
  );
}

export default AddPlacePopup;
