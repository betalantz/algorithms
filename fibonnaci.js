function fiboLoop(num){
    var a = 1, b = 0, temp;
  
    while (num >= 0){
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }
  
    return b;
}
  
function fiboRec(num) {
    if (num <= 1) return 1;

    return fiboRec(num - 1) + fiboRec(num - 2);
}
  
function fiboMemo(num, memo) {
    memo = memo || {};

    if (memo[num]) return memo[num];
    if (num <= 1) return 1;

    return memo[num] = fiboMemo(num - 1, memo) + fiboMemo(num - 2, memo);
}
console.log(fiboLoop(5));
console.log(fiboRec(0));
console.log(fiboMemo(5));