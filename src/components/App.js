import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {
  ////////////////////////////////////////////
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  const [isAddCardPopupOpen, setisAddCardPopupOpen] = React.useState(false);
  function handleAddCardClick() {
    setisAddCardPopupOpen(true);
  }
  const [isAvatarProfilePopupOpen, setisAvatarProfilePopupOpen] = React.useState(false);
  function handleAvatarProfileClick() {
    setisAvatarProfilePopupOpen(true);
  }
  const [selectedCard, setSelectedCard] = React.useState(null);
  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setisAddCardPopupOpen(false);
    setisAvatarProfilePopupOpen(false);
    setSelectedCard(null);
  }
  ////////////////////////////////////////////
  return (
    <>
      <Header />
      <Main 
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddCardClick}
        onEditAvatar={handleAvatarProfileClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm 
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        title="Редактировать профиль"
        buttonText="Сохранить"
      >
        <input name="name" id="user" type="text" placeholder="Имя" className="popup__input popup__input_type_user" /* minlength="2" maxlength="40" */ required />
        <span id="user-error" className="error"></span>
        <input name="about" id="user-information" type="text" placeholder="О себе" className="popup__input popup__input_type_user-information" /* minlength="2" maxlength="200" */ required />
        <span id="user-information-error" className="error"></span>
      </PopupWithForm>
      <PopupWithForm 
        isOpen={isAddCardPopupOpen}
        onClose={closeAllPopups}
        title="Новое место"
        buttonText="Создать"
      >
        <input name="name" id="title-location" type="text" placeholder="Название" className="popup__input popup__input_type_title" /* minlength="2" maxlength="30" */ required />
        <span id="title-location-error" className="error"></span>
        <input name="link" id="link-image" type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_type_image-link" required />
        <span id="link-image-error" className="error"></span>
      </PopupWithForm>
      <PopupWithForm 
        isOpen={isAvatarProfilePopupOpen}
        onClose={closeAllPopups}
        title="Обновить аватар"
        name= "avatar"
        buttonText="Сохранить"
      >
        <input name="avatar" id="link-avatar" type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_type_image-link" required />
        <span id="link-avatar-error" className="error"></span>

      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <PopupWithForm 
        
        onClose={closeAllPopups}
        title="Вы уверены?"
        name= "delete"
        buttonText="Да"
      />
    </>
  );
}

export default App;
