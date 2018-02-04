import { combineReducers } from 'redux';
import LevelsReducer from './levels-reducer';
import SelectedLevelReducer from './select-level-reducer';

const rootReducer = combineReducers({
  levels: LevelsReducer,
  selectedLevel: SelectedLevelReducer
});

export default rootReducer;