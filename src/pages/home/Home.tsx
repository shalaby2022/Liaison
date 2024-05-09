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
  const [clickedButton, setClickedButton] = useState<string | null>(null);

  const handleClick = (category: string) => {
    setClickedButton(category);
    dispatch(getHomeList(category));
  };

  const { isLoading, products, error } = useAppSelector((state) => state.home);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getHomeList(clickedButton));
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
            onClick={() => handleClick("electronics")}
            isClicked={clickedButton === "electronics"}
          />
          <CustomButton
            title={"jewelery"}
            onClick={() => handleClick("jewelery")}
            isClicked={clickedButton === "jewelery"}
          />
          <CustomButton
            title={"men's clothing"}
            onClick={() => handleClick("men's clothing")}
            isClicked={clickedButton === "men's clothing"}
          />
          <CustomButton
            title={"women's clothing"}
            onClick={() => handleClick("women's clothing")}
            isClicked={clickedButton === "women's clothing"}
          />
        </div>
      </div>

      <div className="category-wrapper">
        {!isLoading &&
          products?.length === 0 &&
          Categories &&
          Categories?.map(({ type, description, id }) => (
            <CardItem title={type} description={description} key={id} />
          ))}
      </div>

      <div className="category-wrapper">
        {!isLoading &&
          products?.length > 0 &&
          products?.map(({ title, description, id, image }) => (
            <CardItem
              title={title}
              description={description}
              key={id}
              image={image}
            />
          ))}
      </div>

      <div>{isLoading && <div className="loading">Loading...</div>}</div>

      <div>{error && <div className="loading">{error}</div>}</div>
    </div>
  );
};

export default Home;
