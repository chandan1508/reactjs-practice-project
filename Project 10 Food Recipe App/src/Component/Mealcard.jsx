import React from "react";
import { NavLink } from "react-router-dom";

const Mealcard = ({ detail }) => {
  console.log(detail);
  return (
    <div className="meals">
      {!detail
        ? ""
        : detail.map((curItem, idMeal) => {
            return (
              <div className="mealImg" key={idMeal}>
                <img src={curItem.strMealThumb} />
                <p>{curItem.strMeal}</p>
                <NavLink to={`/${curItem.idMeal}`}>
                  <button>Recipe</button>
                </NavLink>
              </div>
            );
          })}
    </div>
  );
};

export default Mealcard;
