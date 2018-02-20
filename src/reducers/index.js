import { combineReducers } from 'redux';
import SelectedLevelReducer from './change-level-reducer';
import UserPortfolioReducer from './user-portfolio-reducer';
import InvestmentTypesReducer from './investment-reducer';

const rootReducer = combineReducers({
  selectedLevel: SelectedLevelReducer,
  userPortfolio: UserPortfolioReducer,
  types: InvestmentTypesReducer
});

export default rootReducer;