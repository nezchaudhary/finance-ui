import React, { Component } from 'react';
import { ChangeLevel } from '../../actions/level-change';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class LevelDetail extends Component {

  updateSelectedLevel() {
    this.props.changeLevel(this.props.level);
  }

  render() {
    return (
      <label className="level">
        <input
          type="radio"
          value={this.props.level}
          name="tolerance-level"
          onChange={this.updateSelectedLevel.bind(this)}
          checked={this.props.level === this.props.selectedLevel}
        />
        {this.props.level}
      </label>
    );
  }
};

// anything returned form this function will end up as props on the container
const mapStateToProps = (state) => {
  return {
    selectedLevel: state.selectedLevel
  }
}

// whenever change level is called, result is passed to all of our reducers.
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ changeLevel: ChangeLevel }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LevelDetail);
