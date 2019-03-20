import React, { Component, Fragment } from 'react';
import burgerInstance from '../../axios';

import Burger from './Components/Burger/Burger';
import BuildControls from './Components/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  bacon: 0.6,
  cheese: 0.4,
  meat: 1.3,
  salad: 0.5,
}

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      bacon: 0,
      cheese: 0,
      meat: 0,
      salad: 0,
    },
    totalPrice: 4,
    modalOpen: false,
    postLoading: false,
  }

  addIngredientHandler = type => {
    this.setState((prevState, currProps) => ({
      ingredients: {
        ...prevState.ingredients,
        [type]: prevState.ingredients[type] + 1,
      },
      totalPrice: prevState.totalPrice + INGREDIENT_PRICES[type]
    }));
  }

  removeIngredientHandler = type => {
    if (this.state.ingredients[type] > 0) {
      this.setState((prevState, currProps) => ({
        ingredients: {
          ...prevState.ingredients,
          [type]: prevState.ingredients[type] - 1,
        },
        totalPrice: prevState.totalPrice - INGREDIENT_PRICES[type]
      }));
    }
  }

  openOrderModalHandler = () => this.setState({ modalOpen: true });
  closeOrderModalHandler = () => {console.log("MAMG clicked");this.setState({ modalOpen: false })};

  placeOrderHandler = e => {
    e.stopPropagation();
    this.setState({ postLoading: true });
    const { ingredients, totalPrice } = this.state;
    const data = {
      ingredients,
      totalPrice,
      customer: {
        name: 'Marco',
        address: 'Street',
        email: 'mail@mail.com'
      },
      deliveryMethod: 'fastest'
    }
    burgerInstance.post('/orders.json', data)
      .then(response => {
        this.setState({ postLoading: false, modalOpen: false });
        console.log("MAMG response", response);
      })
      .catch(err => {
        this.setState({ postLoading: false, modalOpen: false });
        console.log("MAMG err", err);
      });
  }

  render() {
    const { ingredients, modalOpen, postLoading, totalPrice } = this.state;
    return (
      <Fragment>
        <Burger ingredients={ingredients} />
        <BuildControls
          ingredients={ingredients}
          handleAddIngredient={this.addIngredientHandler}
          handleRemoveIngredient={this.removeIngredientHandler}
          price={totalPrice}
          open={modalOpen}
          openModal={this.openOrderModalHandler}
          closeModal={this.closeOrderModalHandler}
          placeOrder={this.placeOrderHandler}
          placeOrderLoading={postLoading}
        />
      </Fragment>
    )
  }
}

export default BurgerBuilder;
