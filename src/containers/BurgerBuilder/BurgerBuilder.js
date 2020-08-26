import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BurgerBuildControls from "../../components/Burger/BurgerBuildControls/BurgerBuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummarry from "../../components/Burger/OrderSummary/OrderSummarry";

export class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: {
        label: "Salad",
        quantity: 0,
        price: 0.5,
      },
      bacon: {
        label: "Bacon",
        quantity: 0,
        price: 1.2,
      },
      cheese: {
        label: "Cheese",
        quantity: 0,
        price: 1,
      },
      meat: {
        label: "Meet",
        quantity: 0,
        price: 2,
      },
    },
    totalPrice: 10,
    purchaseable: false,
    purchasing: false,
  };

  purchaseHandler = (purchasing) => {
    this.setState({ purchasing });
  };

  purchaseContinuesHandler = () => {
    alert("Continue");
  };

  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((ingredient) => {
        return ingredients[ingredient].quantity;
      })
      .reduce((initial, act) => {
        return initial + act;
      }, 0);

    this.setState({ purchaseable: sum > 0 });
  };

  addIngredeintHandler = (type) => {
    const updatedQuantity = this.state.ingredients[type].quantity + 1;

    const updatedIngredients = {
      ...this.state.ingredients,
    };

    updatedIngredients[type].quantity = updatedQuantity;

    const updatedTotalPrice =
      this.state.totalPrice + this.state.ingredients[type].price;

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedTotalPrice,
    });

    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredeintHandler = (type) => {
    if (this.state.ingredients[type].quantity > 0) {
      const updatedQuantity = this.state.ingredients[type].quantity - 1;

      const updatedIngredients = {
        ...this.state.ingredients,
      };

      updatedIngredients[type].quantity = updatedQuantity;

      const updatedTotalPrice =
        this.state.totalPrice - this.state.ingredients[type].price;

      this.setState({
        ingredients: updatedIngredients,
        totalPrice: updatedTotalPrice,
      });

      this.updatePurchaseState(updatedIngredients);
    }
  };

  render() {
    return (
      <React.Fragment>
        <Modal
          show={this.state.purchasing}
          closed={() => this.purchaseHandler(false)}
        >
          <OrderSummarry
            ingredients={this.state.ingredients}
            purchaseCanceled={() => this.purchaseHandler(false)}
            purchaseContinued={this.purchaseContinuesHandler}
            totalPrice={this.state.totalPrice.toFixed(2)}
          ></OrderSummarry>
        </Modal>
        <Burger ingredients={this.state.ingredients}></Burger>
        <BurgerBuildControls
          ingredients={this.state.ingredients}
          price={this.state.totalPrice.toFixed(2)}
          purchaseable={this.state.purchaseable}
          ordered={() => this.purchaseHandler(true)}
          ingredientAdded={this.addIngredeintHandler}
          ingredientRemoved={this.removeIngredeintHandler}
        ></BurgerBuildControls>
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
