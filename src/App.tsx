import React from "react";

const App: React.FC = () => {
  const Categories = [
    {
      type: "Electroincs",
      description: "Discover the latest tech gadgets and accessories",
    },
    {
      type: "Apparel",
      description: "Find the perfect outfit for any occasion",
    },
    {
      type: "Home & Garden",
      description: "Tansform your living space with our home decor",
    },
    {
      type: "Beauty & Personal Care",
      description: "Tansform your living space with our home decor",
    },
  ];

  return (
    <div>
      <div>
        <div>
          <p>{"Shop by Category"}</p>
          <p>{"Discover the perfect products for your needs."}</p>
        </div>
        <div>
          <button>{"Electronics"}</button>
          <button>{"Apparel"}</button>
          <button>{"Home & Garden"}</button>
          <button>{"Beauty & Personal Care"}</button>
        </div>
      </div>
      <div>
        {Categories &&
          Categories?.map((category) => (
            <div>
              <img src="../public/vite.svg" />
              <p>{category.type}</p>
              <p>{category.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
