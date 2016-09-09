exports.largestPrimeFactor = function(n){
  var primeNumber = 0;
  // do your work here
var divisor = 2;
  //starts checking from 2
while(n % divisor > 0){
  //loops through numbers while n % divisor > 0
  divisor ++;
  //increments by 1 to check for highest prime factor
  while(n % divisor === 0 && divisor < Math.sqrt(n)){
  //if n is divisible by the divisor, and less than half of the squareroot of n, then divide n
    n /= divisor;
  }
}
  primeNumber = n;
  return primeNumber;
};