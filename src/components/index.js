import React, { Component } from "react";
import "./index.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {submit} from "../action";

 class CustomerList extends Component {
constructor(props){
  super(props);
  this.state = {
    searchValue : '',
    list : []
  }
  this.handleOnChange = this.handleOnChange.bind(this);
  this.handleClick = this.handleClick.bind(this);
}

handleOnChange = (event) => {
   this.setState({ value: event.target.value });
};
handleClick = () => {
  // const url = `https://jsonplaceholder.typicode.com/users/${this.state.value}`;
  // Axios.get(url).then((result) => {
  //   console.log('26',result)
  //   this.setState( { response: result.data })
  // });
  this.props.actions.submit(this.state.value);
};
  
  render() {
    const {finalResult:{
      value
    }} = this.props;
    return (
      <div>
      <input
        type="textarea"
        value={this.state.value}
        onChange={this.handleOnChange}
      />
      <button onClick={this.handleClick}>submit</button>
          <div>Result: {value &&value.id||""}</div>
    </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ submit }, dispatch)
  };
}

const mapStateToProps = (state) => {
  return {
    finalResult: (state && state.mainReducer)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerList);