import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../index.css';

function App() {
  /* const elementE = document.querySelector('.profile__edit');
  const element2 = document.querySelector('#popup-profile');
  elementE.addEventListener('click', () => {
    
    return (
      <div className="popup popup_is-opened" id="popup-profile" >
        <div className="popup__container" id="popup-edit-container">
            <button type="button" className="popup__close"></button>
            <form className="popup__form" method="POST" id="popup-form-edit" name="editingInformation">
                <h2 className="popup__title">Редактировать профиль</h2>
                <input name="name" id="user" type="text" placeholder="Имя" className="popup__input popup__input_type_user" minlength="2" maxlength="40" required />
                <span id="user-error" className="error"></span>
                <input name="about" id="user-information" type="text" placeholder="О себе" className="popup__input popup__input_type_user-information" minlength="2" maxlength="200" required />
                <span id="user-information-error" className="error"></span>
                <button id="btn-edit-save" type="submit" className="popup__save">Сохранить</button>
            </form>
            
        </div>
      </div>
    )
  
  }); */  
  return (
    <body className="page">
      <Header />
      <Main />
      <Footer />
      <div className="popup" id="popup-profile" >
        <div className="popup__container" id="popup-edit-container">
            <button type="button" className="popup__close"></button>
            <form className="popup__form" method="POST" id="popup-form-edit" name="editingInformation">
                <h2 className="popup__title">Редактировать профиль</h2>
                <input name="name" id="user" type="text" placeholder="Имя" className="popup__input popup__input_type_user" /* minlength="2" maxlength="40" */ required />
                <span id="user-error" className="error"></span>
                <input name="about" id="user-information" type="text" placeholder="О себе" className="popup__input popup__input_type_user-information" /* minlength="2" maxlength="200" */ required />
                <span id="user-information-error" className="error"></span>
                <button id="btn-edit-save" type="submit" className="popup__save">Сохранить</button>
            </form>
            
        </div>
      </div>
      <div className="popup" id="popup-add">
        <div className="popup__container" id="popup-add-container">
            <button type="button" className="popup__close" id="popup-close-add"></button>
            <form className="popup__form" method="POST" name="formAddPlace" id="popup-form-add">
                <h2 className="popup__title">Новое место</h2>
                <input name="name" id="title-location" type="text" placeholder="Название" className="popup__input popup__input_type_title" minlength="2" maxlength="30" required />
                <span id="title-location-error" className="error"></span>
                <input name="link" id="link-image" type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_type_image-link" required />
                <span id="link-image-error" className="error"></span>
                <button id="btn-add-save" type="submit" className="popup__save popup__save_disabled" disabled>Создать</button>
            </form>
            
        </div>
    
      </div>
      <div className="popup" id="popup-avatar">
        <div className="popup__container" id="popup-avatar-container">
            <button type="button" className="popup__close" id="popup-close-avatar"></button>
            <form className="popup__form popup__form_avatar" method="POST" name="formAvatar" id="popup-form-avatar">
                <h2 className="popup__title">Обновить аватар</h2>
               
                <input name="avatar" id="link-avatar" type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_type_image-link" required />
                <span id="link-avatar-error" className="error"></span>
                <button id="btn-avatar-save" type="submit" className="popup__save popup__save_disabled">Сохранить</button>
            </form>
            
        </div>
      </div>
      <div className="popup popup_img" id="popup-image">
        <div className="popup__container">
            <button type="button" className="popup__close" id="popup-close-image"></button>
            <img src="#" alt="#" className="popup__image" />
            <h2 className="popup__title popup__title_img"></h2>
        </div>
    
      </div>
      <div className="popup" id="popup-delete">
        <div className="popup__container" id="popup-delete-container">
            <button type="button" className="popup__close" id="popup-close-delete"></button>
            <form className="popup__form popup__form_delete" method="POST" name="formDelete" id="popup-form-delete">
                <h2 className="popup__title popup__title_delete">Вы уверены?</h2>
                <button id="btn-delete-save" type="submit" className="popup__save popup__save_delete">ДА</button>
            </form>
            
        </div>
      </div>


      <template id="places-card-template">
        <div className="places__card">
            <img src="images/karachaevsk-kar_cher.png" alt="Карачаево-Черкесия" className="places__image" />
            <h2 className="places__title">Карачаево-Черкесия</h2>
            <div className="places__like-container">
                <button type="button" className="places__like"></button>
                <p className="places__like-number">2</p>
            </div>
            {/* <!-- <button type="button" className="places__like"></button> --> */}
            <button type="button" className="places__delete"></button>
        </div>
      </template>
       {/* <!--<script type="module" src="scripts/index.js"></script> -->
      <!-- <script src="scripts/script.js"></script> -->
      <!-- <script src="scripts/Card.js"></script> -->
      <!-- <script src="scripts/validate.js"></script> -->  */}
    </body>
  );
}

export default App;
