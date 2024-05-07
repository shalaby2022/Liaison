/* eslint-disable react/prop-types */
import "./styles.css";

const CustomButton = ({ onClick, isClicked, title }) => {
  return (
    <button
      className={`custom-button ${isClicked ? "clicked" : ""}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
