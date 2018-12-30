import React, { Component } from 'react';
import Head from './Head';
import Form from './Form';
import './App.css';
import { connect } from "react-redux";

class App extends Component {
 
 
  submit = (state)=>{ 
  var url ='https://api.exchangeratesapi.io/latest?base=USD';
  
  fetch(url)
   .then(response => response.json())
   .then((data)=>{ this.props.api_rate(data.rates[this.props.state.to]);this.props.api_date(data.date)})}
  
  render() {
    const total = this.props.state.rate*this.props.state.amount;
    
    return (
      <div className="App">
         <Head/>
         
         <Form submitted={this.submit} total={total}/>
        
      </div>
    );
  }
}


const mapDispachToProps = dispatch => {
  return {
      
      api_rate: (e) => dispatch({ type: "API_RATE", value:e}),
      api_date: (d) => dispatch({ type: "API_DATE", value:d})
  };
};


const mapStateToProps = state => {
  return {
    state
  };
};



export default connect(mapStateToProps,mapDispachToProps)(App);

