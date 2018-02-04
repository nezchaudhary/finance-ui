import React, { Component } from 'react';
import { connect } from 'react-redux';
import LevelDetail from './level-detail';

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
      <form>
        {this.renderLevels()}
      </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    levels: state.levels
  }
}

export default connect(mapStateToProps)(Levels);