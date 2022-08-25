import React, { useEffect } from "react";
import "./Popup.css";

const Popup = ({ isActive, children, closePopup }) => {
  const closeByOverlayClick = () => closePopup();

  useEffect(() => {
    if (!isActive) return;
    const closeOnEscapeKey = (e) => {
      if (e.key === "Escape") {
        closePopup();
      }
    };

    document.addEventListener("keyup", closeOnEscapeKey);
    return () => {
      document.removeEventListener("keyup", closeOnEscapeKey);
    };
  }, [isActive, closePopup]);

  return (
    <div
      className={`popup ${isActive && "popup_opened"}`}
      onClick={() => closeByOverlayClick()}
    >
      <div
        className="popup__content"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="popup__close hover-button"
          onClick={() => closePopup()}
        />
        {children}
      </div>
    </div>
  );
};

export default Popup;
