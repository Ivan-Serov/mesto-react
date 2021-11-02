import React from "react";

export default function Card(props) {
  const {
    card: { link, name, likes }
  } = props;

  function handleClick() {
    props.onCardClick(props.card);
  }
  return(
    <div className="places__card">
        <img 
        src={link}
        alt={name} 
        className="places__image" 
        onClick={handleClick}
        />
        <h2 className="places__title">{name} </h2>
        <div className="places__like-container">
            <button type="button" className="places__like"></button>
            <p className="places__like-number">{likes.length}</p>
        </div>
        {/* <!-- <button type="button" className="places__like"></button> --> */}
        <button type="button" className="places__delete"></button>
    </div>
  );
}