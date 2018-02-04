import React, { Component } from 'react';
import { connect } from 'react-redux';

class Levels extends Component {
  render() {
    return (
      <div>
        {this.props.levels.map(level => <span>{level}</span>)}
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