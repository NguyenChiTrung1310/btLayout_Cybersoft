import React, { Component } from 'react';
import Product from './Product/Product';

export default class ProductList extends Component {
  renderSanPham = () => {
    let { prodArray } = this.props;

    return prodArray.map((sp, index) => {
      return <Product sanPham={sp} key={index}></Product>;
    });
  };

  render() {
    return (
      <div className="container">
        <div>{this.renderSanPham()}</div>
      </div>
    );
  }
}
