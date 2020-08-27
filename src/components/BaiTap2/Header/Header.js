import React, { Component } from 'react';
import classes from './style.module.css';

export default class Header extends Component {
  render() {
    return (
      <div className={classes.Header}>
        <h1 className={classes.title}>Try glasses app online</h1>
      </div>
    );
  }
}
