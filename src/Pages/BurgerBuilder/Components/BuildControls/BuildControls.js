import React from 'react';
import classes from './BuildControls.module.css';
import PropTypes from 'prop-types';

import BuildControl from './BuildControl/BuildControl';
import OrderModal from '../OrderModal/OrderModal';

const controls = [
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
  { label: 'Salad', type: 'salad' },
]

const BuildControls = props => {
  const isPurchasable = Object.keys(props.ingredients)
    .filter(ingredient => props.ingredients[ingredient] > 0)
    .length > 0;

  return (
    <div className={classes.buildControls}>
      <p>Current price: {props.price.toFixed(2)}</p>
      {controls.map(control =>
        <BuildControl
          disableRemove={props.ingredients[control.type] <= 0}
          label={control.label}
          key={control.type}
          handleAddIngredient={props.handleAddIngredient.bind(this, control.type)}
          handleRemoveIngredient={props.handleRemoveIngredient.bind(this, control.type)}
        />
      )}
      <button
        className={classes.orderButton}
        disabled={!isPurchasable}
        onClick={props.openModal}
      >
        Order now
      </button>
      <OrderModal
        open={props.open}
        closeModal={props.closeModal}
        ingredients={props.ingredients}
        price={props.price}
        placeOrder={props.placeOrder}
        placeOrderLoading={props.placeOrderLoading}
      />
    </div>
  )
};

BuildControls.propTypes = {
  closeModal: PropTypes.func.isRequired,
  handleAddIngredient: PropTypes.func.isRequired,
  handleRemoveIngredient: PropTypes.func.isRequired,
  ingredients: PropTypes.shape({
    bacon: PropTypes.number.isRequired,
    cheese: PropTypes.number.isRequired,
    meat: PropTypes.number.isRequired,
    salad: PropTypes.number.isRequired
  }).isRequired,
  open: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
  placeOrder: PropTypes.func.isRequired,
  placeOrderLoading: PropTypes.bool,
  price: PropTypes.number.isRequired,
}

export default BuildControls;
