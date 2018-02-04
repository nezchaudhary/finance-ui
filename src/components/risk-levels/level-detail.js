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

const mapStateToProps = (state) => ( { selectedLevel: state.selectedLevel }) ;
const mapDispatchToProps = (dispatch) => bindActionCreators({ changeLevel: ChangeLevel }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(LevelDetail);
