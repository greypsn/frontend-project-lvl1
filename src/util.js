const getRandomNum = (start, end) => {
    const min = Math.ceil(start);
    const max = Math.floor(end);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

const generateProgression = (start, step, length) => {
  const res = [];
  for (let i = 0; i < length; i += 1) {
    res.push(start + step * i);
  }
  return res;
};

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error('Operator not supported');
  }
};

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

const isPrime = (number) => {
  if (number < 2) { return false; }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) { return false; }
  }
  return true;
};

export { getRandomNum, generateProgression, calculate, gcd, isPrime };