import React from "react";
import "./popup.css";
const PopUp = ({ data, index, handleClick }) => {
  const { img, alt, text, popuptitle } = data[index];
  return (
    <div className="modal_bg">
      <div className={`modal`}>
        <div className="modal-content">
          <div className="close-img" onClick={() => handleClick()}>
            <img src="./img/icons/close_icon.svg" alt="close" />
          </div>
          <div className="modal-content-column">
            <div className="modal-content-image">
              <img src={img} alt={alt} />
            </div>
            <h3 className="modal-content-title">&nbsp;{popuptitle}</h3>
            {text.map((e) => (
              <p>&nbsp;{e}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PopUp;
