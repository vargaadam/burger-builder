import React from "react";
import PropTypes from "prop-types";
import styles from "./BurgerBuildControls.module.css";
import BurgerBuildControl from "./BurgerBuildControl/BurgerBuildControl";

const BurgerBuildControls = (props) => {
  const burgerBuildControls = Object.keys(props.ingredients).map(
    (ingredientKey) => {
      const ingredient = props.ingredients[ingredientKey];
      return (
        <BurgerBuildControl
          key={ingredient.label}
          label={ingredient.label}
          isDisabled={props.ingredients[ingredientKey].quantity === 0}
          added={() => props.ingredientAdded(ingredientKey)}
          removed={() => props.ingredientRemoved(ingredientKey)}
        ></BurgerBuildControl>
      );
    }
  );

  return (
    <div className={styles.BurgerBuildControls}>
      <p>
        Current price <strong>{props.price}</strong>
      </p>
      {burgerBuildControls}
      <button
        className={styles.OrderButton}
        disabled={!props.purchaseable}
        onClick={props.ordered}
      >
        CHECKOUT
      </button>
    </div>
  );
};

BurgerBuildControls.propTypes = {
  ingredients: PropTypes.object.isRequired,
  purchaseable: PropTypes.bool.isRequired,
  ingredientAdded: PropTypes.func.isRequired,
  ingredientRemoved: PropTypes.func.isRequired,
  ordered: PropTypes.func.isRequired,
};

export default BurgerBuildControls;
