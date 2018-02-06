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
        <h4 className="risk-levels-title center">Select Your Risk Tolerance</h4>
        <div className="grid-x grid-padding-x">
          <div className="small-12 medium-8 medium-offset-2 large-8 large-offset-2 cell">
            <div className="grid-x">
              <span className="small-1 medium-1 large-1 cell center risk-type">Low</span>
              {this.renderLevels()}
              <span className="small-1 medium-1 large-1 cell center risk-type">High</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ( { levels: state.levels } );
export default connect(mapStateToProps)(Levels);