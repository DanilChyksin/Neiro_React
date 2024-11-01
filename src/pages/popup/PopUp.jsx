import React from "react";
import "./popup.css";
const PopUp = ({ data, index, handleClick }) => {
  const { title, img, alt, text } = data[index];
  return (
    <div className={`modal`}>
      <div className="modal-content">
        <div className="close-img" onClick={() => handleClick()}>
          <img src="./img/icons/close_icon.svg" alt="close" />
        </div>
        <div className="modal-content-column">
          <div className="modal-content-image">
            <img src={img} alt={alt} />
          </div>
          <h3 className="modal-content-title">{title}</h3>
          {text.map((e) => (
            <p>{e}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default PopUp;
