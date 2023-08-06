import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classes from './OrderModal.module.css';

import OrderSummary from './OrderSummary/OrderSummary';
import Button from '../../../../Components/UI/Button/Button';
import Spinner from '../../../../Components/UI/Spinner/Spinner';

const OrderModal = props => {
  const modalClassNames = props.open ? [classes.modal, classes.open] : [classes.modal, classes.close];
  const backdropClassNames = props.open ? [classes.backdrop, classes.open] : [classes.backdrop, classes.close];
  return (
    <Fragment>
      <div className={backdropClassNames.join(' ')} onClick={props.closeModal}></div>
      <div className={modalClassNames.join(' ')}>
        {!!props.placeOrderLoading
          ? <Spinner />
          : <OrderSummary ingredients={props.ingredients} price={props.price} />
        }
        <Button onClick={props.closeModal} type='danger'>Cancel</Button>
        <Button onClick={props.placeOrder} type='success'>Continue</Button>
      </div>
    </Fragment>

  )
};

OrderModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  ingredients: PropTypes.shape({
    bacon: PropTypes.number.isRequired,
    cheese: PropTypes.number.isRequired,
    meat: PropTypes.number.isRequired,
    salad: PropTypes.number.isRequired
  }).isRequired,
  open: PropTypes.bool.isRequired,
  placeOrder: PropTypes.func.isRequired,
  placeOrderLoading: PropTypes.bool,
  price: PropTypes.number.isRequired,
}

export default OrderModal;
