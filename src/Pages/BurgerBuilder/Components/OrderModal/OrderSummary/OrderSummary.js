import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classes from './OrderSummary.module.css';

const OrderSummary = props => {

  return (
    <Fragment>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {Object.keys(props.ingredients)
          .filter(ingredient => !!props.ingredients[ingredient])
          .map(ingredient => (
            <li key={ingredient}>
              <span className={classes.ingredientName}>{ingredient}:</span> 
              {props.ingredients[ingredient]}
            </li>
          ))
        }
      </ul>
      <p>Total price: ${props.price.toFixed(2)}</p>
      <p>Continue to checkout?</p>
    </Fragment>
  )
};

OrderSummary.propTypes = {
  ingredients: PropTypes.shape({
    bacon: PropTypes.number.isRequired,
    cheese: PropTypes.number.isRequired,
    meat: PropTypes.number.isRequired,
    salad: PropTypes.number.isRequired
  }).isRequired,
  price: PropTypes.number.isRequired,
}

export default OrderSummary;
