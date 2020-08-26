import React from "react";
import PropTypes from "prop-types";
import Button from "../../UI/Button/Button";

function OrderSummarry(props) {
  const ingredientsSummary = Object.keys(props.ingredients).map(
    (ingredient) => {
      return (
        <li key={ingredient}>
          <span style={{ textTransform: "capitalize" }}>{ingredient}</span>:
          {props.ingredients[ingredient].quantity}
        </li>
      );
    }
  );

  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <p>the burger contains the following ingredients:</p>
      {ingredientsSummary}
      <p>
        <strong>Total Price: {props.totalPrice}</strong>
      </p>
      <div style={{ display: "flex" }}>
        <Button clicked={props.purchaseCanceled} type="Danger">
          CANCEL
        </Button>
        <Button clicked={props.purchaseContinued} type="Success">
          CONTINUE
        </Button>
      </div>
    </React.Fragment>
  );
}

OrderSummarry.propTypes = {
  ingredients: PropTypes.object.isRequired,
  purchaseContinued: PropTypes.func.isRequired,
  purchaseCanceled: PropTypes.func.isRequired,
  totalPrice: PropTypes.string.isRequired,
};

export default OrderSummarry;
