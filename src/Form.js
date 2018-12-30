import React, { Component } from 'react'
import './Form.css';
import { connect } from "react-redux";
export class form extends Component {


submit = (e)=>{this.props.submitted(); e.preventDefault(); }

  render() {
    
    return (
      <div>
      
        <form >
        <div className='Userselection'>

            <div>
        <h2>From</h2>
        <select value={this.props.from} onChange={this.props.convertFrom}>
        <option value="USD">USD America</option>
        <option value="GBP" selected>GBP UK</option>
        <option value="EUR">EUR Europe</option>
        <option value="JPY" >JPY Japan</option>
        <option value="BGN" >Bulgarian</option>
        <option value="CAD" >Canadian Dollar</option>
        <option value="BRL" >Brazilian Real	</option>
        <option value="DKK" >Danish Krone</option>
        <option value="CHF" >Swiss Franc</option>
        <option value="SEK" >Swedish Krona</option>
        <option value="NOK" >Norwegian Krone</option>
        <option value="NZD" >New Zealand Dollar</option>
        <option value="HKD" >Hong Kong Dollar</option>
        <option value="AUD" >Australian Dollar</option>
        <option value="RUB" >Russian Ruble</option>
        <option value="THB" >Baht THAILAND</option>
        <option value="TRY" >Turkish Lira</option>
        <option value="ILS" >New Israeli Sheqel</option>
        <option value="IDR" >Rupiah INDONESIA</option>
        <option value="INR" >Indian Rupee</option>
        <option value="SGD" >Dollar SINGAPORE</option>
        <option value="CNY" >Renminbi Yuan CHINA </option>
        <option value="MYR" >Ringgit MALAYSIA</option>
        <option value="ISK" >ICELAND</option>
        <option value="PHP" >Philippine Peso</option>
        <option value="MXN" >New Peso</option>
        <option value="KRW" >Won Korea</option>
        <option value="PLN" >Zloty</option>
        <option value="CZK" >Czech Koruna</option>
        <option value="ZAR" >Rand</option>
        <option value="HRK" >Croatia</option>
        <option value="RON" >Romanian Leu	</option>
        <option value="HUF" >Forint	</option>

       </select> 
            </div>
            <div>
       <h2>To</h2>
       <select value={this.props.to} onChange={this.props.convertTo}>

       <option value="USD">USD America</option>
       <option value="GBP" selected>GBP UK</option>
       <option value="EUR">EUR Europe</option>
       <option value="JPY" >JPY Japan</option>
       <option value="BGN" >Bulgarian</option>
       <option value="CAD" >Canadian Dollar</option>
       <option value="BRL" >Brazilian Real	</option>
       <option value="DKK" >Danish Krone</option>
       <option value="CHF" >Swiss Franc</option>
       <option value="SEK" >Swedish Krona</option>
       <option value="NOK" >Norwegian Krone</option>
       <option value="NZD" >New Zealand Dollar</option>
       <option value="HKD" >Hong Kong Dollar</option>
       <option value="AUD" >Australian Dollar</option>
       <option value="RUB" >Russian Ruble</option>
       <option value="THB" >Baht THAILAND</option>
       <option value="TRY" >Turkish Lira</option>
       <option value="ILS" >New Israeli Sheqel</option>
       <option value="IDR" >Rupiah INDONESIA</option>
       <option value="INR" >Indian Rupee</option>
       <option value="SGD" >Dollar SINGAPORE</option>
       <option value="CNY" >Renminbi Yuan CHINA </option>
       <option value="MYR" >Ringgit MALAYSIA</option>
       <option value="ISK" >ICELAND</option>
       <option value="PHP" >Philippine Peso</option>
       <option value="MXN" >New Peso</option>
       <option value="KRW" >Won Korea</option>
       <option value="PLN" >Zloty</option>
       <option value="CZK" >Czech Koruna</option>
       <option value="ZAR" >Rand</option>
       <option value="HRK" >Croatia</option>
       <option value="RON" >Romanian Leu	</option>
       <option value="HUF" >Forint	</option>
       </select> 
             </div>
             <div>
       <h2>Amount</h2>
       <input type="text"  placeholder='Enter amount' onChange={this.props.amount}/>
       <button onClick={this.submit}>Submit</button>
              </div>

              <div>
              <p>YOU GET: {this.props.total.toFixed(2) } {this.props.state.to}   DATE: {this.props.state.date}</p>
              <p>ONE {this.props.state.from}={Math.floor(this.props.state.rate*100)/100} {this.props.state.to}</p>
               </div>
              </div>
        </form> 
       
      </div>
    )
  }
}
const mapStateToProps = state => {
    return {
      state
      
    };
  };

const mapDispachToProps = dispatch => {
    return {
        convertFrom: (e) => dispatch({ type: "CONVERT_FROM", value:e.target.value  }),
        convertTo: (e) => dispatch({ type: "CONVERT_TO", value:e.target.value }),
        amount: (e) => dispatch({ type: "AMOUNT", value:e.target.value }),
        submit: () => dispatch({ type: "SUBMI" })
    };
  };

export default connect(
    mapStateToProps,
    mapDispachToProps
  )(form);
