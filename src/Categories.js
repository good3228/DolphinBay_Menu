import React from "react";

const Categories = ({ categories, filterItems, activeCategory }) => {
  console.log(categories);
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <botton
            key="index"
            className={`${
              activeCategory === category ? "filter-btn active" : "filter-btn"
            }`}
            onClick={() => filterItems(category)}
            type="botton"
          >
            {category}
          </botton>
        );
      })}
    </div>
  );
};

export default Categories;
