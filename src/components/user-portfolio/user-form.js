import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputField from './input-field';

class UserPortfolioForm extends Component {
  constructor() {
    super();
    this.state = {
      cash: '$',
      bonds: '$',
      'mutual-funds': '$',
      gold: '$',
      stocks: '$'
    }
  }

  renderInputs() {
    let investments = Object.keys(this.state);
    return investments.map(type => {
      return (
        <InputField
          field={type}
          key={type}
          value={this.state[type]}
          name={`${type}-value`}
        />
      )
    });
  }
  
  
  
  render() {
    // let inputs = this.renderInputs();
    // console.log('inputs', inputs);
    return (
      <div>
        <div>Please state your investments in USD</div>
        <form>
          {this.renderInputs()}
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    level: state.selectedLevel
  }
}

export default connect(mapStateToProps)(UserPortfolioForm);

// <div>
//   <label>Cash:
//               <input type="text" name="cash-value" placeholder="$0" value={this.state.cash} />
//   </label>
// </div>
//   <div>
//     <label>Bonds:
//               <input type="text" name="bonds-value" placeholder="$0" value={this.state.bonds} />
//     </label>
//   </div>
//   <div>
//     <label>Mutual Funds:
//               <input type="text" name="mutualFunds-value" placeholder="$0" value={this.state.mutualFunds} />
//     </label>
//   </div>
//   <div>
//     <label>Gold:
//               <input type="text" name="gold-value" placeholder="$0" value={this.state.gold} />
//     </label>
//   </div>
//   <div>
//     <label>Stocks:
//               <input type="text" name="stock-value" placeholder="$0" value={this.state.stocks} />
//     </label>
//   </div>

 // {inputs[0]}
          // {inputs[1]}
          // {inputs[2]}
          // {inputs[3]}
          // {inputs[4]}