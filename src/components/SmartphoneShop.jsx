import React, { Component } from 'react';
import Header from './BaiTap1/Header';
import Slider from './BaiTap1/Slider';
import ProductList from './BaiTap1/ProductList';
import Footer from './BaiTap1/Footer';
import data from '../data/phoneData.json';

export default class SmartphoneShop extends Component {
  render() {
    return (
      <div>
        <Header />
        <Slider />
        <ProductList mangSanPham={data} />
        <Footer />
      </div>
    );
  }
}
