import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.module.css';

const Button = props => {
  return (
    <button
      className={[classes.button, classes[props.type]].join(' ')}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['success', 'danger']),
}

export default Button;
