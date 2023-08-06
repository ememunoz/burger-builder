import React, { Component, Fragment } from 'react';
import classes from './Layout.module.css';
import PropTypes from 'prop-types';

import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showDrawer: false,
  }

  openDrawer = () => this.setState({showDrawer: true});
  closeDrawer = () => this.setState({showDrawer: false});

  render() {
    return (
      <Fragment>
        <Toolbar openDrawer={this.openDrawer} closeDrawer={this.closeDrawer}/>
        <SideDrawer open={this.state.showDrawer} closeDrawer={this.closeDrawer}/>
        <main className={classes.content}>
          {this.props.children}
        </main>
      </Fragment>
    )
  }
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
