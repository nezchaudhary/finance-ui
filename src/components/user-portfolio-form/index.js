import React, { Component } from 'react';
import { connect } from 'react-redux';

import PortfolioForm from './portfolio-form.js';
import UserDoughnutChart from '../chart/chart';
import './user-portfolio-form.css';

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

  createFormContext(context, classes) {
    return (
      <div className={classes} onClick={this.handleClickToRenderForm.bind(this)}>
        {context}
      </div>
    )
  }

  createDataTypes() {
    const compare = (
      <div className="grid-x compare-button-wrapper">
        {this.createFormContext('Compare your portfolio', 'button small-6 medium-6 cell compare-button')};
      </div>
    );
    const form = <PortfolioForm submit={this.handlePortfolioSubmit.bind(this)} />;
    const chart = (
      <div>
        <UserDoughnutChart type="user-portfolio"/>
        <div className="grid-x">
          {this.createFormContext('Change portfolio', 'small-4 medium-4  large-4 clear button change-button')}
        </div>
      </div>
    );
    const noInput = (
      <div className="try-again-container">
        <div className="grid-x"> 
          <div className="small-12 medium-12 large-12 cell grid-x"> 
            <div className="text-bold">No Investments Found</div>
          </div>
          {this.createFormContext('Try Again', 'button small-3 medium-3 large-3 cell try-again-button')}
        </div>
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
    return toRender;
  }
}

const mapStateToProps = (state) => ( { level: state.selectedLevel } );
export default connect(mapStateToProps)(CustomPortfolio);