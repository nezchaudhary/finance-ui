import { combineReducers } from 'redux';
import LevelsReducer from './levels-reducer';

const rootReducer = combineReducers({
  levels: LevelsReducer
});

export default rootReducer;