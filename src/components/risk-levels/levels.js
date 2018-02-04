import React, { Component } from 'react';
import { connect } from 'react-redux';
import LevelDetail from './level-detail';
import './risk-levels.css';

class Levels extends Component {

  renderLevels() {
    const levels = this.props.levels.map(level => ( <LevelDetail key={level} level={level} /> ));
    return levels;
  }

  render() {
    return (
      <div>
        <h4>What is your risk tolerance?</h4>
        <span>Conservative</span>
        {this.renderLevels()}
        <span>High Risk</span>
      </div>
    )
  }
}

const mapStateToProps = (state) => ( { levels: state.levels } );
export default connect(mapStateToProps)(Levels);