const moneyBox = (coins) => {
  var savedCoins = 0;
  savedCoins += coins;
  console.log(`MoneyBox: ${savedCoins}`);
}

moneyBox(5);
moneyBox(10);

const moneyBox = () => {
  var savedCoins = 0;
  const countCoins = (coins) => {
    savedCoins += coins;
    console.log(`MoneyBox: ${savedCoins}`);
  }
  return countCoins;
};

let myMoneyBox = moneyBox();

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);