import React from "react";

export default function PopupWithForm(props) {
const { name, title, children, isOpen, onClose } = props;
  const popupClass = `popup ${isOpen && "popup_opened"}`;
  const formClass = `popup__form popup__form_${name}`;
  return (
    <div className={popupClass} >
      <div className="popup__container">
        <button type="button" className="popup__close" onClick={onClose}></button>
        <form className={formClass} method="POST" name={name}>
            <h2 className="popup__title">{title}</h2>
            {children}
            
            <button type="submit" className="popup__save">Сохранить</button>
        </form>
        
      </div>
    </div>
  );
}