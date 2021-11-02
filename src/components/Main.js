import React from 'react';
import Api  from '../utils/Api'
import Card from './Card'
import '../index.css';
const api = new Api('https://nomoreparties.co/v1/cohort-28', 'd0022a9e-a6be-4d9a-ab6e-3949875c7c34');
function Main(props) {
  //////////////////////////////////////////
  const {onEditAvatar, onEditProfile, onAddPlace, onCardClick}=props;
  
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);
  ////////////////
  console.log(api);
  
  
  React.useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);
  React.useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => console.log(err));
  }, []);
  ////////////////

//////////////////////////////////////////
  return (
    <main>
        <section className="profile">
            <div className="profile__avatar"  onClick={onEditAvatar}>
              <img src={userAvatar} alt="avatar" className="profile__foto-avatar" />
            </div>
            <div className="profile__text-group">
                <div className="profile__title-box">
                    <h1 className="profile__title">{userName}</h1>
                    <button type="button" className="profile__edit" id="profE" onClick={onEditProfile}></button>
                </div>
                <p className="profile__subtitle">{userDescription}</p>
            </div>
            <button type="button" className="profile__add" onClick={onAddPlace}></button>
        </section>
        <section className="places">
          {cards.map((post) => (
          <Card card={post} onCardClick={onCardClick} key={post._id} />
        ))}
        </section>
           
    </main>

  );
}
  
export default Main;