import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import {
  About,
  Home,
  Product,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  PrivateRoute,
} from './pages';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route
          path='/'
          element=<Home />
        />
        <Route
          path='/about'
          element=<About />
        />
        <Route
          path='/cart'
          element=<Cart />
        />
        <Route
          path='/products'
          element=<Product />
        />
        <Route
          path='/products/:id'
          element=<SingleProduct />
        />
        <Route
          path='/checkout'
          element=<PrivateRoute component=<Checkout /> />
        />
        <Route
          path='*'
          element=<Error />
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
