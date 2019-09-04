import React from 'react';
import Header from './Header'
import ProductPage from './Pages/Product-page'
import {Provider} from 'react-redux'
import store from './store'
import{GlobalStyle} from './style'

function App() {
  return (
    <div >
    <GlobalStyle/>
    <Provider store={store}>
      <Header></Header>
      <ProductPage></ProductPage>
    </Provider>
    </div>
  );
}

export default App;
