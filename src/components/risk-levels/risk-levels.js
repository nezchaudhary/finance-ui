import React, { Component } from 'react';
import { connect } from 'react-redux';
// import LevelDetail from './risk-level-detail';
import { updateRiskLevel } from '../../actions/update-risk-level';
import { bindActionCreators } from 'redux';

import Header from '../main-header/header';
import './risk-levels.css';

class Levels extends Component {

  updateSelectedLevel(e) {
    this.props.updateLevel(e.target.value);
  }

  render() {
    return (
      <div className="risk-levels-main">
        <div className="grid-x grid-padding-x">
          <div className="small-12 medium-8 medium-offset-2 large-8 large-offset-2 cell">
            <div className="grid-x">
              <span className="small-1 medium-1 medium-offset-1 large-1 large-offset-1 cell center risk-type low">Low</span>
              <div className="slide-container small-10 medium-8 large-8 cell">    
                <input 
                  name="risk-range"
                  type="range" 
                  min="0" 
                  max="10"
                  value={this.props.selectedLevel || 0}
                  className="slider" 
                  id="risk-levels"
                  onChange={this.updateSelectedLevel.bind(this)}
                />
              </div>
              <span className="small-1 medium-1 large-1 cell center risk-type high">High</span>
            </div> 
          </div>
        </div>
        <div className="risk-level-header">
          <Header header={`Risk Tolerance: ${this.props.selectedLevel || 0}`} />
        </div>
      </div>
    )
  }

 }


const mapStateToProps = (state) => ({ selectedLevel: state.selectedLevel });
const mapDispatchToProps = (dispatch) => bindActionCreators({ updateLevel: updateRiskLevel }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Levels);
      