import React, { Component } from 'react';
import Product from './Product';

export default class ProductList extends Component {
  renderSanPham = () => {
    let { mangSanPham } = this.props;

    return mangSanPham.map((sp, index) => {
      return <Product sanPham={sp} key={index}></Product>;
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center">BEST SMARTPHONE</h1>
        <div className="row">{this.renderSanPham()}</div>
      </div>
    );
  }
}
