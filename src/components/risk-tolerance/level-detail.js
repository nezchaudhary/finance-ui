import React, { Component } from 'react';
import { ChangeLevel } from '../../actions/level-change';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class LevelDetail extends Component {

  render() {
    return (
      <label>
        <input
          type="radio"
          value={this.props.level}
          name="tolerance-level"
          onChange={() => this.props.changeLevel(this.props.level)}
          checked={false}
        />
        {this.props.level}
      </label>
    );
  }
};

// anything returned form this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  // whenever select book is called, result is passed to all of our reducers.
  return bindActionCreators({ changeLevel: ChangeLevel }, dispatch);
}

//Promote BookList from a component to a container, needs to know about the dispatch method, selectBook.
// Make it available as a prop 
export default connect(null, mapDispatchToProps)(LevelDetail);
