import React from 'react';
import PropTypes from 'prop-types';
import classes from './Toolbar.module.css';

import Logo from '../../Components/Logo/Logo';
import NavItems from '../NavItems/NavItems';
import MenuIcon from '../../assets/svg/menuIcon';

const Toolbar = props => {
  return (
    <header className={classes.toolbar}>
      <div className={classes.menuIcon} onClick={props.openDrawer}><MenuIcon/></div>
      <div className={classes.logo}><Logo/> </div>
      <nav className={classes.navItems}><NavItems/></nav>
    </header>
  )
};

Toolbar.propTypes = {
  closeDrawer: PropTypes.func.isRequired,
  openDrawer: PropTypes.func.isRequired,
}

export default Toolbar;
