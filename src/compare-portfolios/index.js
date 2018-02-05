/*

// Input: Ideal portfolio based on risk in percentages, current user portfolio
// Output: Minimum value of investments that need to be moved to match ideal and current
// Constraint: Minimum adjustments that need to be made
// Edge Cases: Floating points, rounded figures might not add up.

Strategy:
// Calculate user portfolio size by adding all investment values
// Calculate user ideal portfolio but mapping total size to ideal percentage distribution 
  // Adjust last one to left over value to avoid edge cases of rounding numbers
// Calculate difference between ideal and current portfolio
// Sort difference in 2 arrays with max reductions and max increases
// Run a loop until all reductions have been adjusted with increases by popping values from both as you go

Big O: O(n) // all iterations are linear in nature with constant look ups
       sorting is nlog(n) for reductions and increases

Transformation: 
  ideal = [20, 5, 25, 15, 35]; // percentages
  userP = [70, 46, 67, 87, 32]; // current user portfolio in dollar values
  userIdealP = [60, 15, 76, 45, 106]; // ideal user portfolio in dollar values
  difference = [-10, -31, 9, -42, 74] // difference between ideal and current
  shrink = [-10, -31, -42]; increase = [9, 74]; // divide in 2 arrays to adjust and sort them
  shrink = [-10, -31]; increase = [9, 32]; // start popping values that have been adjusted
  shrink = [-10]; increase = [9, 1];
  shrink = [-9]; increase = [9];
  shrink = []; increase = [];
*/

// Dummy data
const ideal = { Cash: 20, Bonds: 5, 'Mutual Funds': 25, Gold: 15, Stocks: 35 };
const userPortfolio1 = { Cash: 70, Bonds: 46, 'Mutual Funds': 67, Gold: 87, Stocks: 32 };
const userPortfolio2 = { Cash: 5000, Bonds: 3888, 'Mutual Funds': 4638, Gold: 4342, Stocks: 75833 };
const userIdeal1 = { Cash: 60, Bonds: 15, 'Mutual Funds': 76, Gold: 45, Stocks: 106 };
const userIdeal2 = { Cash: 18740, Bonds: 4685, 'Mutual Funds': 23425, Gold: 14055, Stocks: 32795 };
const types = Object.keys(ideal); // Array of different types of investments


// this function returns the total size of user's portfolio
const calculateSumOfAllInvestments = (portfolio) => {
  let total = 0;
  for (let type in portfolio) {
    total += portfolio[type];
  }
  return total;
}

// this function returns the user's ideal portfolio based on the size
const calculateIdealUserPortfolio = (userPortfolio, riskPortfolio) => {
  const idealPortfolioPercentages = Object.values(riskPortfolio);
  const userPortfolioSize = calculateSumOfAllInvestments(userPortfolio);
  let valueUntilNow = 0;
  return idealPortfolioPercentages.map((percent, i) =>  {
    let value;
    if (i !== types.length - 1) {
      value = Math.round((percent / 100) * userPortfolioSize);
      valueUntilNow += value;
    } else {
      value = userPortfolioSize - valueUntilNow;
    }
    return value;
  });
}

// this function calculates the difference in portfolios
const calculateDifferenceInDollars = (userPortfolio, riskPortfolio) => {
  const userIdealPortfolio = calculateIdealUserPortfolio(userPortfolio, riskPortfolio);
  console.log('user ideal', userIdealPortfolio);
  const userInvestments = Object.values(userPortfolio);
  const difference = userInvestments.map((current, i) => (
    { name: types[i], value: userIdealPortfolio[i] - current}
  ));
  return difference;
};

const sortDifferencesByIncreaseAndDecrease = (differences) => {
  // Divide differences into investments that need to increase and decrease
  const sortedDifferences = differences.reduce((result, investment) => {
    if (investment.value < 0) result.decrease.push(investment);
    if (investment.value > 0) result.increase.push(investment);
    return result;
  }, { decrease: [], increase: [] });
  // Sorting decrease and increase by their max value
  const decrease = sortedDifferences.decrease.sort((a, b) => b - a);
  const increase = sortedDifferences.increase.sort((a, b) => a - b);
  return { decrease, increase };
}

// this function returns an array of strings that tells us how to adjust investments
const shiftInvestments = (user, ideal) => {
  const differences = calculateDifferenceInDollars(user, ideal);
  const { increase, decrease } = sortDifferencesByIncreaseAndDecrease(differences);
  const investmentsToMove = []; // Array to push string values of investments to move
  
  // Run a while loop until values have been adjusted
  while(decrease.length) {
    let maxDecrease = decrease[decrease.length - 1];
    let maxIncrease = increase[increase.length - 1];
    if (maxIncrease.value - Math.abs(maxDecrease.value) > 0) { // max increase is larger than max decrease
      investmentsToMove.push(`Move $${Math.abs(maxDecrease.value)} from ${maxDecrease.name} to ${maxIncrease.name}`);
      increase[increase.length - 1].difference -= Math.abs(maxDecrease.value);
      decrease.pop();
    } else if (maxIncrease.value - Math.abs(maxDecrease.value) < 0) { // max decrease is larger than max increase
      investmentsToMove.push(`Move $${maxIncrease.value} from ${maxDecrease.name} to ${maxIncrease.name}`);
      decrease[decrease.length - 1].value += maxIncrease.value;
      increase.pop();
    } else { // decrease and increase are of same size
      investmentsToMove.push(`Move $${maxIncrease.value} from ${maxDecrease.name} to ${maxIncrease.name}`);
      increase.pop();
      decrease.pop();
    }
  }
  return investmentsToMove;
};

console.log(shiftInvestments(userPortfolio1, ideal));
console.log(shiftInvestments(userPortfolio2, ideal));
