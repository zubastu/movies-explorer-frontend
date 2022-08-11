import React from "react";
import "./TooltipModalWindow.css";
import Popup from "../../Popup/Popup";
import success from "../../images/sucsess.svg";
import failure from "../../images/wrong.svg";

const TooltipModalWindow = ({
  isActive,
  closePopup,
  isSuccess,
  tooltipContent,
}) => {
  return (
    <Popup isActive={isActive} closePopup={closePopup}>
      <div className="tooltip-modal">
        <img
          className="tooltip-modal__image"
          src={isSuccess ? success : failure}
          alt={isSuccess ? "Успех" : "Неудача"}
        />
        <h3 className="tooltip-modal__text">
          {tooltipContent || (isSuccess && "Успешно")}
        </h3>
      </div>
    </Popup>
  );
};

export default TooltipModalWindow;
