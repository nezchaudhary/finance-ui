import React, { Component } from 'react';
import { connect } from 'react-redux';

import PortfolioForm from './portfolio-form.js';
import UserDoughnutChart from '../charts/doughnut-chart/';
import Button from '../button';
import './user-portfolio-form.css';

class CustomPortfolio extends Component {
  constructor() {
    super()
    this.state = {
      renderForm: false,
      renderChart: false,
      noData: false,
    }
    this.handleClickToRenderForm = this.handleClickToRenderForm.bind(this);
    this.handlePortfolioSubmit = this.handlePortfolioSubmit.bind(this);
  }

  handleClickToRenderForm() {
    this.setState({ renderForm: true });
  }

  handlePortfolioSubmit(total) {
    this.setState({ renderChart: total !== 0, renderForm: false, noData: total === 0 });
  }

  createDataTypes() {
    const compare = (
      <div className="grid-x compare-button-wrapper">
        <Button 
          classes="button small-6 medium-6 cell compare-button" 
          text="Compare your portfolio"
          click={this.handleClickToRenderForm} />
      </div>
    );

    const form = <PortfolioForm submit={this.handlePortfolioSubmit} />;
    
    const chart = (
      <div>
        <UserDoughnutChart type="user-portfolio"/>
        <div className="grid-x">
          <Button 
            classes="small-6 medium-4 large-4 clear button change-button" 
            text="Change Portfolio"
            click={this.handleClickToRenderForm}
          />
        </div>
      </div>
    );
    
    const noInput = (
      <div className="try-again-container">
        <Button 
          classes="clear button try-again-button" 
          text="No Investments Found. Try Again"
          click={this.handleClickToRenderForm} 
        />
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
export default connect(mapStateToProps)(CustomPortfolio);