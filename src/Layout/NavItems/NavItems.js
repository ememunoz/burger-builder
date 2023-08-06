import React from 'react'

import NavItem from './NavItem/NavItem'
import classes from './NavItems.module.css'

const NavItems = props => {
  return (
    <ul className={classes.navItems}>
      <NavItem href="/" active>
        Burger Builder
      </NavItem>
      <NavItem href="/">Checkout</NavItem>
    </ul>
  )
}

export default NavItems
