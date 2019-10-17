import React from 'react';
import Header from './Header'
import ProductPage from './Pages/Product-page'
import ProductDetailInfo from './Pages/ProductDetail-page'
import {Provider} from 'react-redux'
import store from './store'
import { BrowserRouter, Route } from 'react-router-dom';
import{GlobalStyle} from './style'

function App() {
  return (
    <div >
    <GlobalStyle/>
    <Provider store={store}>
    <BrowserRouter>
      <div>
      <Header></Header>
      <Route path='/product' exact component={ProductPage}></Route>
      <Route path='/productDetail' exact component={ProductDetailInfo}></Route>
      </div>
    </BrowserRouter>
    </Provider>
    </div>
  );
}

export default App;
