import { dot, round } from "mathjs";

const regressionFunction = (level: number) => {
  let x = level;
  let xReformat = [
    x,
    x ** 2,
    x ** 3,
    x ** 4,
    x ** 5,
    x ** 6,
    x ** 7,
    x ** 8,
    x ** 9,
    x ** 10,
    x ** 11,
    x ** 12,
    x ** 13,
    x ** 14,
    x ** 15,
    x ** 16,
  ];
  let w = [
    23.98971381, 24.06654338, 22.80716463, 21.37950276, 20.13566017, 19.1302024,
    18.33387043, 17.70296519, 17.198735, 16.79095952, 16.45707929, 16.18045807,
    15.94880248, 15.75294627, 15.58597039, 15.44258055,
  ];
  let b = 247.8209830079753;

  let predictedIncome = dot(xReformat, w) + b;
  return predictedIncome;
};

const predictIncrease = (currInc: number, futInc: number) => {
  currInc = regressionFunction(currInc);
  futInc = regressionFunction(futInc);

  let increase = (futInc - currInc) / currInc;
  return round(increase);
};

export default predictIncrease;
