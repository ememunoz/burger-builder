import React from 'react';
import classes from './Logo.module.css';
import burgerLogo from '../../assets/img/burger-logo.png';

const Logo = () => {
  return (
    <div className={classes.logo}>
      <img src={burgerLogo} alt='logo'/>
    </div>
  )
};

export default Logo;
