import React from 'react';
import PropTypes from 'prop-types';
import classes from './BuildControl.module.css';

const BuildControl = props => {
  return (
    <div className={classes.buildControl}>
      <div className={classes.label}>{props.label}</div>
      <button className={classes.less} onClick={props.handleRemoveIngredient} disabled={props.disableRemove}>Less</button>
      <button className={classes.more} onClick={props.handleAddIngredient}>More</button>
    </div>
  )
};

BuildControl.propTypes = {
  disableRemove: PropTypes.bool,
  label: PropTypes.string.isRequired,
  handleAddIngredient: PropTypes.func.isRequired,
  handleRemoveIngredient: PropTypes.func.isRequired
}

export default BuildControl;
