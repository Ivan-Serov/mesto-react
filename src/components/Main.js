import React from 'react';
import '../index.css';
function Main() {
  //////////////////////////////////////////

    
  ////////////////
  ////////////////
    /* const be = document.querySelector('#popup-profile');
    console.log(be) */
    /* const be = document.querySelector('.page');

    console.log(React.Children.querySelector('#profE'));
    be.querySelector('#profE').addEventListener('click',
    be.querySelector('#popup-profile').classList.add('popup_opened')); */
  //console.log(document.querySelector('#root').querySelector('.profile').querySelector('.profile__title-box').querySelector('.profile__edit'));
  //console.log(document.querySelector('#root').querySelector('#popup-profile'));
  /* document.querySelector('.profile__edit').addEventListener('click', () => {
    document.querySelector('#popup-profile').classList.add('popup_opened');
  });
  document.querySelector('.profile__add').addEventListener('click', () => {
    document.querySelector('#popup-add').classList.add('popup_opened');
  });
  document.querySelector('.profile__avatar').addEventListener('click', () => {
    document.querySelector('#popup-avatar').classList.add('popup_opened');
  }); */

//////////////////////////////////////////
  return (
    <main>
        <section className="profile">
            <div className="profile__avatar">
              <img src="#" alt="avatar" className="profile__foto-avatar" />
            </div>
            <div className="profile__text-group">
                <div className="profile__title-box">
                    <h1 className="profile__title">sdf</h1>
                    <button type="button" className="profile__edit" id="profE"></button>
                </div>
                <p className="profile__subtitle">sdf</p>
            </div>
            <button type="button" className="profile__add"></button>
        </section>
        <section className="places">

        </section>
           
    </main>
    /* <div className="popup" id="popup-profile" >
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
   */
  );
}
  
export default Main;