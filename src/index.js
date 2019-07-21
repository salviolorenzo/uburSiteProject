import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Client from 'shopify-buy';
import { Provider } from 'react-redux';
import store from './store';
import './styles/shopify.css';

const client = Client.buildClient({
  storefrontAccessToken: 'e072ccc6f317789baa5135ec8330b945',
  domain: 'ubur-merch.myshopify.com'
});
store.dispatch({ type: 'CLIENT_CREATED', payload: client });

// buildClient() is synchronous, so we can call all these after!
client.product.fetchAll().then(res => {
  store.dispatch({ type: 'PRODUCTS_FOUND', payload: res });
});
client.checkout.create().then(res => {
  store.dispatch({ type: 'CHECKOUT_FOUND', payload: res });
});
client.shop.fetchInfo().then(res => {
  store.dispatch({ type: 'SHOP_FOUND', payload: res });
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
