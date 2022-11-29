import React from "react";

const Categories = ({ categories, filterItems, activeCategory }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            className={`${
              activeCategory === category ? "filter-btn active" : "filter-btn"
            }`}
            onClick={() => filterItems(category)}
            type="botton"
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
