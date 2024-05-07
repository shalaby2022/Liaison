/* eslint-disable react/prop-types */

const CardItem = ({ type, description }) => {
  return (
    <div>
      <img src="../public/vite.svg" />
      <p>{type}</p>
      <p>{description}</p>
    </div>
  );
};

export default CardItem;
