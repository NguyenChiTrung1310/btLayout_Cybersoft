import React, { Component } from 'react';
import classes from './style.module.css';
import Model from '../../../../assets/model.jpg';
import Glasses from '../../../../assets/g1.jpg';
import Glasses1 from '../../../../assets/g2.jpg';
import Glasses2 from '../../../../assets/g3.jpg';
import Glasses3 from '../../../../assets/g4.jpg';
import Glasses4 from '../../../../assets/g5.jpg';
import Glasses5 from '../../../../assets/g6.jpg';
import Glasses6 from '../../../../assets/g7.jpg';
import Glasses7 from '../../../../assets/g8.jpg';
import Glasses8 from '../../../../assets/g9.jpg';

export default class Product extends Component {
  render() {
    let { sanPham } = this.props;

    return (
      <div className={classes.Product}>
        <div className={classes.Model}>
          <img src={Model} alt='Model' className={classes.model} />
          <img src={Model} alt='Model' className={classes.model1} />
        </div>

        <div className={classes.Glasses}>
          <img src={Glasses1} alt='Model' className={classes.glasses} />
          <img src={Glasses2} alt='Model' className={classes.glasses} />
          <img src={Glasses3} alt='Model' className={classes.glasses} />
          <img src={Glasses4} alt='Model' className={classes.glasses} />
          <img src={Glasses5} alt='Model' className={classes.glasses} />
          <img src={Glasses6} alt='Model' className={classes.glasses} />
          <img src={Glasses7} alt='Model' className={classes.glasses} />
          <img src={Glasses8} alt='Model' className={classes.glasses} />
        </div>
      </div>
    );
  }
}
