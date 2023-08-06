import React from 'react';
import PropTypes from 'prop-types';
import classes from './NavItems.module.css';
import NavItem from './NavItem/NavItem';

const NavItems = props => {
  return (
    <ul className={classes.navItems}>
      <NavItem href='/' active>Burger Builder</NavItem>
      <NavItem href='/'>Checkout</NavItem>
    </ul>
  )
};

NavItems.propTypes = {
}

export default NavItems;
