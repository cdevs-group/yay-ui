import BigNumber from "bignumber.js";

export const BIG_TEN = new BigNumber(10);

export const getBalanceAmount = (amount: BigNumber, decimals = 18) => {
  if (amount) return new BigNumber(amount).dividedBy(BIG_TEN.pow(decimals));
};
