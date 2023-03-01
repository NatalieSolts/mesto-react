// import logo from './logo.svg';
// import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
      {/* Попап «Редактировать профиль» */}
      <PopupWithForm 
        name="edit-profile"
        title="Редактировать профиль"
        children={
          <>
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
            <button className="popup__button-submit button-hover" type="submit">
              Сохранить
            </button>
          </>
        } 
      />
      {/* Попап добавить «Новое место» */}
      <PopupWithForm 
        name="add-place"
        title="Новое место"
        children={
          <>
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
            <button
              className="popup__button-submit button-submit button-hover"
              type="submit"
            >
              Создать
            </button>
          </>
        }
      />     
      {/* Попап подтверждения удаления карточки «Вы уверены?»*/}
      <PopupWithForm 
        name="delete-card-confirmation"
        title="Вы&nbsp;уверены?"
        children={
          <>
            <button className="popup__button-submit button-hover" type="submit">
              Да
            </button>
          </>
        }
      />     
      {/* Попап «Обновить аватар» */}
      <PopupWithForm 
        name="update-avatar"
        title="Обновить аватар"
        children={
          <>
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
            <button className="popup__button-submit button-hover" type="submit">
              Сохранить
            </button>
          </>
        }
      />
      {/* Попап увеличить изображение */}
      <ImagePopup />
    </div>   
  );
}

export default App;
