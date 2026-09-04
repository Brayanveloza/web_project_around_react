import { useState } from "react";
import avatar from "../../images/avatar.jpg";
import type { CardData, PopupConfig } from "../../types/types.ts";

import Popup from "./Popup/Popup";
import NewCard from "./Popup/NewCard";
import EditProfile from "./Popup/EditProfile";
import EditAvatar from "./Popup/EditAvatar";
import Card from "./Card/Card.tsx";

function Main(): React.JSX.Element {
  const [popup, setPopup] = useState<PopupConfig | null>(null);
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

  const handleOpenPopup = (popupConfig: PopupConfig): void => {
    setPopup(popupConfig);
  };

  const handleClosePopup = (): void => {
    setPopup(null);
    setSelectedCard(null);
  };

  const newCardPopup: PopupConfig = {
    title: "Nuevo lugar",
    children: <NewCard />,
  };

  const editProfilePopup: PopupConfig = {
    title: "Editar perfil",
    children: <EditProfile />,
  };

  const editAvatarPopup: PopupConfig = {
    title: "Editar avatar",
    children: <EditAvatar />,
  };

  const cards: CardData[] = [
    {
      isLiked: false,
      _id: "5d1f0611d321eb4bdcd707dd",
      name: "Yosemite Valley",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
      owner: "5d1f0611d321eb4bdcd707dd",
      createdAt: "2019-07-05T08:10:57.741Z",
    },
    {
      isLiked: false,
      _id: "5d1f064ed321eb4bdcd707de",
      name: "Lake Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
      owner: "5d1f0611d321eb4bdcd707dd",
      createdAt: "2019-07-05T08:11:58.324Z",
    },
  ];

  return (
    <main className="content">
      {/* Perfil */}
      <section className="profile page__section">
        <div className="profile__image-container">
          <img className="profile__image" alt="Avatar" src={avatar} />
          <button
            className="profile__image-button"
            type="button"
            aria-label="Editar avatar"
            onClick={() => handleOpenPopup(editAvatarPopup)}
          ></button>
        </div>

        <div className="profile__info">
          <h1 className="profile__title">Jacques Cousteau</h1>
          <button
            aria-label="Editar perfil"
            className="profile__edit-button"
            type="button"
            onClick={() => handleOpenPopup(editProfilePopup)}
          ></button>
          <p className="profile__description">Explorador</p>
        </div>

        <button
          aria-label="Agregar tarjeta"
          className="profile__add-button"
          type="button"
          onClick={() => handleOpenPopup(newCardPopup)}
        ></button>
      </section>

      {/* Lista de tarjetas */}
<section className="cards page__section">
  <ul className="cards__list">
    {cards.map((card) => (
      <Card key={card._id} card={card} onImageClick={setSelectedCard} />
    ))}
  </ul>
</section>

      {/* Popup dinámico */}
      {popup && (
        <Popup
          onClose={handleClosePopup}
          title={popup.title}
          isOpen={popup !== null}
        >
          {popup.children}
        </Popup>
      )}

      {/* ImagePopup */}
      {selectedCard && (
        <Popup
          onClose={handleClosePopup}
          isOpen={selectedCard !== null}
        >
          <img
            className="popup__image"
            src={selectedCard.link}
            alt={selectedCard.name}
          />
        </Popup>
      )}
    </main>
  );
}

export default Main;