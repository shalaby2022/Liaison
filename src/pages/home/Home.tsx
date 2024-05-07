import React, { useEffect, useState } from "react";
import "./styles.css";
import CustomButton from "../../components/CustomButton/CustomButton";
import CardItem from "../../components/CardItem/CardItem";
import { AppDispatch } from "../../store/store";
import { useAppSelector } from "../../store/hooks";
import { useDispatch } from "react-redux";
import { getHomeList } from "../../store/actions/home";
import { Categories } from "./Categories";

const Home: React.FC = () => {
  const [clickedButton, setClickedButton] = useState<number>(1);

  const handleClick = (buttonId: number) => {
    setClickedButton(buttonId);
  };

  const { loading_posts, posts, posts_error } = useAppSelector(
    (state) => state.home
  );

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getHomeList());
  }, []);

  return (
    <div>
      <div className="nav-bar">
        <div className="header-wrapper">
          <p className="header-title">{"Shop by Category"}</p>
          <p className="header-description">
            {"Discover the perfect products for your needs."}
          </p>
        </div>

        <div className="buttons-wrapper">
          <CustomButton
            title={"electronics"}
            onClick={() => handleClick(1)}
            isClicked={clickedButton === 1}
          />
          <CustomButton
            title={"jewelery"}
            onClick={() => handleClick(2)}
            isClicked={clickedButton === 2}
          />
          <CustomButton
            title={"men's clothing"}
            onClick={() => handleClick(3)}
            isClicked={clickedButton === 3}
          />
          <CustomButton
            title={"women's clothing"}
            onClick={() => handleClick(4)}
            isClicked={clickedButton === 4}
          />
        </div>
      </div>

      <div>
        {Categories &&
          Categories?.map(({ type, description, id }) => (
            <CardItem type={type} description={description} key={id} />
          ))}
      </div>
    </div>
  );
};

export default Home;
