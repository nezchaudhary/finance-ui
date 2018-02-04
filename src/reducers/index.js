import { combineReducers } from 'redux';
import LevelsReducer from './levels-reducer';
import SelectedLevelReducer from './change-level-reducer';
import UserPortfolioReducer from './user-portfolio-reducer';

const rootReducer = combineReducers({
  levels: LevelsReducer,
  selectedLevel: SelectedLevelReducer,
  userPortfolio: UserPortfolioReducer
});

export default rootReducer;