import React, { Component } from 'react';
import { connect } from 'react-redux';
import LevelDetail from './level-detail';
import './style.css';

class Levels extends Component {

  renderLevels() {
    return (
      this.props.levels.map(level => (
        <LevelDetail
          key={level}
          level={level} 
        />
      ))
    );
  }

  render() {
    return (
      <div>
        <h4>What is your risk tolerance?</h4>
        {this.renderLevels()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    levels: state.levels,
    currentLevel: state.selectedLevel
  }
}

export default connect(mapStateToProps)(Levels);