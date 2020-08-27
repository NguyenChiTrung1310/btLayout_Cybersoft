import React, { Component } from 'react';
import Background from '../../../assets/background.jpg';
import classes from './style.module.css';

export default class Slider extends Component {
  render() {
    return (
      <div className={classes.Background}>
        <img src={Background} alt='bg' className={classes.bgImg} />
      </div>
    );
  }
}
