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
      <div className="risk-levels-main">
        <h4 className="risk-levels-title center">What is your risk tolerance?</h4>
        <div className="grid-x">
          <span className="small-1 medium-1 large-1 cell center">Low</span>
          {this.renderLevels()}
          <span className="small-1 medium-1 large-1 cell center">High</span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ( { levels: state.levels } );
export default connect(mapStateToProps)(Levels);

// "small-10 small-offset-1 medium-6 medium-offset-3 large-4 large-offest-4 cell 