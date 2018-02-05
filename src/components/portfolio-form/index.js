import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserForm from './user-form.js';
import UserChart from '../charts/user-chart';
import './portfolio-form.css';

class UserPortfolio extends Component {
  constructor() {
    super()
    this.state = {
      renderForm: false,
      renderChart: false,
      noData: false,
    }
  }

  handleClickToRenderForm() {
    this.setState({ renderForm: true });
  }

  handlePortfolioSubmit(total) {
    this.setState({ renderChart: total !== 0, renderForm: false, noData: total === 0 });
  }

  createFormContext(context) {
    return (
      <div onClick={this.handleClickToRenderForm.bind(this)}>
        {context}
      </div>
    )
  }

  createDataTypes() {
    const compare = this.createFormContext('Compare with your current portfolio..');
    const form = <UserForm submit={this.handlePortfolioSubmit.bind(this)} />;
    const chart = (
      <div>
        <UserChart />
        {this.createFormContext('Change portfolio')}
      </div>
    );
    const noInput = (
      <div>
        <div>No investments found</div>
        {this.createFormContext('Try Again?')}
      </div>
    );
    const riskSelected = this.props.level > 0;
    return { compare, form, chart, riskSelected, noInput };
  }

  render() {
    const { compare, form, chart, riskSelected, noInput } = this.createDataTypes();
    if (riskSelected && !this.state.renderForm && !this.state.renderChart && !this.state.noData) {
      return compare;
    } else if (this.state.renderForm) {
      return form;
    } else if (this.state.renderChart) {
      return chart;
    } else if (this.state.noData) {
      return noInput;
    }
    return null;
  }
}

const mapStateToProps = (state) => ( { level: state.selectedLevel } );
export default connect(mapStateToProps)(UserPortfolio);