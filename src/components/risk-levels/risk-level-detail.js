import React, { Component } from 'react';
import { updateRiskLevel } from '../../actions/update-risk-level';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class LevelDetail extends Component {

  updateSelectedLevel() {
    this.props.changeLevel(this.props.level);
  }

  render() {
    return (
      <span className="small-1 medium-1 large-1 cell center">
       <input
          className="option-input checkbox radio"
          type="radio"
          value={this.props.level}
          name={`risk-level-${this.props.level}`}
          onChange={this.updateSelectedLevel.bind(this)}
          checked={this.props.level === this.props.selectedLevel}
          />
        <label className="radio-label" htmlFor={`risk-level-${this.props.level}`}>
          {this.props.level}
        </label>
      </span>
    );
  }
};

const mapStateToProps = (state) => ( { selectedLevel: state.selectedLevel }) ;
const mapDispatchToProps = (dispatch) => bindActionCreators({ changeLevel: updateRiskLevel }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(LevelDetail);
