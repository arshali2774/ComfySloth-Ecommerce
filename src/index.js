import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));

// ! domain dev-pyp7yb6b16v7qeoa.us.auth0.com
// ! client-id FffizS7952Diw7kdRsgiG8jLfYfSEhOT

root.render(
  <ProductsProvider>
    <FilterProvider>
      <CartProvider>
        <Toaster />
        <App />
      </CartProvider>
    </FilterProvider>
  </ProductsProvider>
);
