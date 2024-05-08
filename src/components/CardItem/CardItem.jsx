/* eslint-disable react/prop-types */
import "./styles.css";

const CardItem = ({ type, description }) => {
  return (
    <div className="card-wrapper">
      {/* <img className="img-wrapper" src="../public/vite.svg" /> */}
      <img className="img-wrapper" src="https://placehold.co/600x400" />
      <p className="title">{type}</p>
      <p className="description">{description}</p>
    </div>
  );
};

export default CardItem;
