import React from "react";
import styles from "./Burger.module.css";
import BurgerIngredients from "./BurgerIngredient/BurgerIngredient";
import PropTypes from "prop-types";

function Burger(props) {
  let ingredientElements = Object.keys(props.ingredients)
    .map((ingredient) => {
      return [...Array(props.ingredients[ingredient].quantity)].map((_, i) => {
        return (
          <BurgerIngredients
            key={ingredient + i}
            type={ingredient}
          ></BurgerIngredients>
        );
      });
    })
    .reduce((arr, curr) => {
      return arr.concat(curr);
    }, []);

  if (ingredientElements.length === 0) {
    ingredientElements = <p>Please start addding ingredients!</p>;
  }

  return (
    <div className={styles.Burger}>
      <BurgerIngredients type="bread-top"></BurgerIngredients>
      {ingredientElements}
      <BurgerIngredients type="bread-bottom"></BurgerIngredients>
    </div>
  );
}

Burger.propTypes = {
  ingredients: PropTypes.object.isRequired,
};

export default Burger;
