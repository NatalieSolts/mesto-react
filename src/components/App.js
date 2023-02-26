// import logo from './logo.svg';
// import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="page">
      <Header />
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
      <footer className="footer">
        <p className="footer__text">©&nbsp;2022 Mesto Russia</p>
      </footer>
      {/* Попап редактировать профиль */}
      <section className="popup popup_type_edit-profile">
        <div className="popup__container">
          <button className="popup__button-close button-hover" type="reset" />
          <h2 className="popup__title">Редактировать профиль</h2>
          <form
            action="#"
            name="popup__form"
            className="popup__form popup__form_edit-profile"
            noValidate=""
          >
            <input
              type="text"
              defaultValue=""
              className="popup__input popup__input_type_name"
              name="name"
              placeholder="Имя"
              required=""
              minLength={2}
              maxLength={40}
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
              minLength={2}
              maxLength={200}
              id="job"
            />
            <span className="popup__error job-error" />
            <button className="popup__button-submit button-hover" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </section>
      {/* Попап добавить новое место */}
      <section className="popup popup_type_add-place">
        <div className="popup__container">
          <button className="popup__button-close button-hover" type="reset" />
          <h2 className="popup__title">Новое место</h2>
          <form
            action="#"
            name="popup__form"
            className="popup__form popup__form_add-place"
            noValidate=""
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
            <button
              className="popup__button-submit button-submit button-hover"
              type="submit"
            >
              Создать
            </button>
          </form>
        </div>
      </section>
      {/* Попап увеличить изображение */}
      <section className="popup popup_type_increase-img">
        <div className="popup__image-container">
          <button className="popup__button-close button-hover" type="reset" />
          <img
            className="popup__cards-image"
            src="data:,"
            alt="Изображение места"
          />
          <h2 className="popup__cards-name" />
        </div>
      </section>
      {/* Попап подтверждения удаления карточки */}
      <section className="popup popup_type_delete-card-confirmation">
        <div className="popup__container">
          <button className="popup__button-close button-hover" type="reset" />
          <h2 className="popup__title">Вы&nbsp;уверены?</h2>
          <form
            action="#"
            name="popup__form"
            className="popup__form popup__form_delete-card-confirmation"
            noValidate=""
          >
            <button className="popup__button-submit button-hover" type="submit">
              Да
            </button>
          </form>
        </div>
      </section>
      {/* Попап обновления аватарки */}
      <section className="popup popup_type_update-avatar">
        <div className="popup__container">
          <button className="popup__button-close button-hover" type="reset" />
          <h2 className="popup__title">Обновить аватар</h2>
          <form
            action="#"
            name="popup__form"
            className="popup__form popup__form_update-avatar"
            noValidate=""
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
            <button className="popup__button-submit button-hover" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </section>
    </div>    
  );
}

export default App;
