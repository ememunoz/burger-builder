import React from 'react';
import PropTypes from 'prop-types';
import classes from './NavItem.module.css';

const NavItem = props => {
  return (
    <li className={classes.navItem}>
      <a href={props.href} className={props.active ? classes.active : null}>
        {props.children}
      </a>
    </li>
  )
};

NavItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired
}

export default NavItem;
