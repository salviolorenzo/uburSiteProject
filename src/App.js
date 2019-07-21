import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Tour from './components/tour/tour';
import { connect } from 'react-redux';
import Cart from './components/shopify/Cart';
import store from './store';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
    this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
    this.handleCartClose = this.handleCartClose.bind(this);
    this.handleCartOpen = this.handleCartOpen.bind(this);
    this.state = {
      isMobile: false,
      menuIsOpen: false
    };
  }

  componentDidMount() {
    this.resize();
    window.addEventListener('resize', this.resize.bind(this));
  }

  updateQuantityInCart(lineItemId, quantity) {
    const state = store.getState(); // state from redux store
    const checkoutId = state.checkout.id;
    const lineItemsToUpdate = [
      { id: lineItemId, quantity: parseInt(quantity, 10) }
    ];
    state.client.checkout
      .updateLineItems(checkoutId, lineItemsToUpdate)
      .then(res => {
        store.dispatch({
          type: 'UPDATE_QUANTITY_IN_CART',
          payload: { checkout: res }
        });
      });
  }
  removeLineItemInCart(lineItemId) {
    const state = store.getState(); // state from redux store
    const checkoutId = state.checkout.id;
    state.client.checkout
      .removeLineItems(checkoutId, [lineItemId])
      .then(res => {
        store.dispatch({
          type: 'REMOVE_LINE_ITEM_IN_CART',
          payload: { checkout: res }
        });
      });
  }
  handleCartClose() {
    store.dispatch({ type: 'CLOSE_CART' });
  }
  handleCartOpen() {
    store.dispatch({ type: 'OPEN_CART' });
  }

  resize() {
    if (window.innerWidth >= 700) {
      this.setState({
        isMobile: false,
        menuIsOpen: false
      });
    } else {
      this.setState({
        isMobile: true
      });
    }
  }

  handleMenuClick() {
    let isOpen = this.state.menuIsOpen;
    this.setState({
      menuIsOpen: !isOpen
    });
  }

  render() {
    const state = store.getState(); // state from redux store

    return (
      <Router>
        <div className="App">
          <Header
            handleCartOpen={this.handleCartOpen}
            isMobile={this.state.isMobile}
            menuIsOpen={this.state.menuIsOpen}
            handleMenuClick={this.handleMenuClick.bind(this)}
          />
          <Route path="/" exact component={Home} />
          <Route path="/tour" component={Tour} />
          <Cart
            checkout={state.checkout}
            isCartOpen={state.isCartOpen}
            handleCartClose={this.handleCartClose}
            updateQuantityInCart={this.updateQuantityInCart}
            removeLineItemInCart={this.removeLineItemInCart}
          />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default connect(state => state)(App);
