import React, { Component } from 'react';
import './App.css';
import InputList from './components/index.js';
import { connect } from "react-redux";
import {submit} from "./action";
import { bindActionCreators } from "redux";

class App extends Component {

  render() {
    return (
    <div className="App">
      <InputList {...this.props}/>
    </div>
    );
  }
}

export default (App);
