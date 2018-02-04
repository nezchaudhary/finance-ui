import React, { Component } from 'react';

// import SelectLevel from '../../actions/index.js';

class LevelDetail extends Component {

  handleChange(event) {
    console.log('event is', event);
  }

  render() {
    return (
      <label>
        <input
          type="radio"
          value={this.props.level}
          name="tolerance-level"
          onChange={this.handleChange}
          checked="false"
        />
        {this.props.level}
      </label>
    );
  }
};

export default LevelDetail;

// // anything returned form this function will end up as props on the BookList container
// function mapDispatchToProps(dispatch) {
//   // whenever select book is called, result is passed to all of our reducers.
//   return bindActionCreators({ selectedLevel: props. }, dispatch);
// }

// //Promote BookList from a component to a container, needs to know about the dispatch method, selectBook.
// // Make it available as a prop 
// export default connect(mapDispatchToProps)(ToleranceLevel);
