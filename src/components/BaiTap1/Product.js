import React, { Component } from 'react';
import Modal from 'react-modal';

export default class Product extends Component {
  state = {
    showModal: false
  }

  render() {
    let { sanPham } = this.props;

    return (
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
        <div className="container">
          <div className="card bg-light">
            <img
              className="card-img-top"
              src={sanPham.img}
              alt="Card img"
              style={{ maxWidth: '100%', height: 250 }}
            />
            <div className="card-body text-center">
              <h4 className="card-title text-center">{sanPham.name}</h4>
              <p className="card-text">{sanPham.price}</p>
              <a href="#a" className="btn btn-primary" onClick={() => this.setState({ showModal: true })}>
                Details
              </a>
              <a href="#b" className="btn btn-danger">
                Cart
              </a>
            </div>
          </div>
        </div>
        <Modal isOpen={this.state.showModal}>
          <div className="row">
            <div className="col-4">
              <h3 className="text-center">{sanPham.name}</h3>
              <img src={sanPham.img} alt="Note 20" className="w-100" />
            </div>
            <div className='col-8 text-left'>
              <h3>Thông số kĩ thuật</h3>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Màn hình</td>
                    <td>{sanPham.screen}</td>
                  </tr>
                  <tr>
                    <td>Camera trước</td>
                    <td>{sanPham.frontCamera}</td>
                  </tr>
                  <tr>
                    <td>Camera sau</td>
                    <td>{sanPham.backCamera}</td>
                  </tr>
                  <tr>
                    <td>Mô tả sản phẩm </td>
                    <td>{sanPham.desc}</td>
                  </tr>
                  <tr>
                    <td>Price </td>
                    <td>{sanPham.price}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <button
            className='btn btn-primary'
            onClick={() => this.setState({ showModal: false })}
            style={{ position: 'absolute', right: '50px', top: '60%' }}
          >Close</button>
        </Modal>
      </div>
    );
  }
}
