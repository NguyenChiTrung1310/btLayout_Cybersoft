import React, { Component } from 'react';
import Background from './BaiTap2/Background/Background';
import Header from './BaiTap2/Header/Header';
import Product from './BaiTap2/Products/Product/Product';
import ProductList from './BaiTap2/Products/ProductList';

import data from '../data/glassesData.json';

export default class GlassesApp extends Component {
  render() {
    return (
      <div>
        <Header />
        <Background />
        <ProductList prodArray={data} />
        <Product />
      </div>
    );
  }
}
