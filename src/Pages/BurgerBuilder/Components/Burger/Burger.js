import React from 'react';
import PropTypes from 'prop-types';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = props => {
  const parsedIngredients =
    Object.keys(props.ingredients)
      .map(ingredient => {
        return [...Array(props.ingredients[ingredient])].map((_, i) => {
          return <BurgerIngredient key={ingredient + i} type={ingredient} />
        });
      })
      .reduce((arr, el) => {
        return arr.concat(el);
      }, []);
  return (
    <div className={classes.burger}>
      <BurgerIngredient type={'bread-top'} />
      {parsedIngredients.length > 0 ? parsedIngredients : <p>Please start adding ingredients</p>}
      <BurgerIngredient type={'bread-bottom'} />
    </div>
  );
};

Burger.propTypes = {
  ingredients: PropTypes.shape({
    bacon: PropTypes.number.isRequired,
    cheese: PropTypes.number.isRequired,
    meat: PropTypes.number.isRequired,
    salad: PropTypes.number.isRequired
  }).isRequired
}

export default Burger;
