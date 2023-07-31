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

const domain = 'dev-pyp7yb6b16v7qeoa.us.auth0.com';
const client_id = 'AtUO7TCpO6jBtEVzuN51aRFVKU7qUFtl';

root.render(
  <Auth0Provider
    domain={domain}
    clientId={client_id}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <Toaster />
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);
