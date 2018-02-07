// This file tests some of the functions in the calculate-portfolio-shift module

import {
  calculateHowToMoveInvestments,
  calculateIdealUserPortfolio,
  calculateDifferenceInDollars,
  sortDifferencesByIncreaseAndDecrease
} from '../calculate-portfolio-shift/index';

const portfolio = { cash: 5000, bonds: 7000, mutualFunds: 4000, gold: 7000, stocks: 3000 };
const percentages = { cash: 20, bonds: 15, mutualFunds: 10, gold: 25, stocks: 30 };
let differences;

test ('should calculate portfolio in dollars given percentages', () => {
  const result = calculateIdealUserPortfolio(portfolio, percentages); // [5200, 3900, 2600, 6500, 7800]
  expect(Array.isArray(result)).toBe(true);
  expect(result[0]).toEqual(5200);
  expect(result[1]).toEqual(3900);
  expect(result[2]).toEqual(2600);
  expect(result[3]).toEqual(6500);
  expect(result[4]).toEqual(7800);
});

test('should calculate difference in dollars', () => {
  const result = calculateDifferenceInDollars(portfolio, percentages); 
  differences = result;
  expect(Array.isArray(result)).toBe(true);
  expect(result[0].value).toEqual(200);
  expect(result[1].value).toEqual(-3100);
  expect(result[2].value).toEqual(-1400);
  expect(result[3].value).toEqual(-500);
  expect(result[4].value).toEqual(4800);
});

test('should return 2 arrays with values representing increase and decrease size of investment', () => {
  const result = sortDifferencesByIncreaseAndDecrease(differences);
  expect(result.decrease).toBeDefined();
  expect(result.increase).toBeDefined();
  expect(Array.isArray(result.decrease)).toBe(true);
  expect(Array.isArray(result.increase)).toBe(true);
});

test('should return an array of strings stating how to move investments', () => {
  const result = calculateHowToMoveInvestments(portfolio, percentages);
  expect(Array.isArray(result)).toBe(true);
  expect(typeof (result[0])).toBe('string');
});