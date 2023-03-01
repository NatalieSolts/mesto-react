import React from 'react';

function ImagePopup() {
    
    return (
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
    )
}

export default ImagePopup;