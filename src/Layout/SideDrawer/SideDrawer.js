import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classes from './SideDrawer.module.css';

import Logo from '../../Components/Logo/Logo';
import NavItems from '../NavItems/NavItems';

const SideDrawer = props => {
  const sideDrawerClassNames = props.open ? [classes.sideDrawer, classes.open] : [classes.sideDrawer, classes.close];
  const backdropClassNames = props.open ? [classes.backdrop, classes.open] : [classes.backdrop, classes.close];

  return (
    <Fragment>
      <div className={backdropClassNames.join(' ')} onClick={props.closeDrawer}></div>
      <div className={sideDrawerClassNames.join(' ')}>
        <div className={classes.logo}><Logo /></div>
        <nav><NavItems /></nav>
      </div>
    </Fragment>
  )
};

SideDrawer.propTypes = {
  closeDrawer: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
}

export default SideDrawer;
