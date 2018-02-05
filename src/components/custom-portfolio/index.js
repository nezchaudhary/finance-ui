import React, { Component } from 'react';
import { connect } from 'react-redux';

import PortfolioForm from './portfolio-form.js';
import CustomChart from '../charts/custom-chart';
import './portfolio-form.css';

class CustomPortfolio extends Component {
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
    const form = <PortfolioForm submit={this.handlePortfolioSubmit.bind(this)} />;
    const chart = (
      <div>
        <CustomChart />
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
    let toRender;
    const { compare, form, chart, riskSelected, noInput } = this.createDataTypes();
    if (riskSelected && !this.state.renderForm && !this.state.renderChart && !this.state.noData) {
      toRender = compare;
    } else if (this.state.renderForm) {
      toRender = form;
    } else if (this.state.renderChart) {
      toRender =  chart;
    } else if (this.state.noData) {
      toRender = noInput;
    } else {
      toRender = null;
    }
    return toRender ? <div className="small-12 medium-6 cell">{toRender}</div> : null;
  }
}

const mapStateToProps = (state) => ( { level: state.selectedLevel } );
export default connect(mapStateToProps)(CustomPortfolio);