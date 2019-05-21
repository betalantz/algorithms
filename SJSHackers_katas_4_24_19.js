// my fail
// var lenLongestFibSubseq = function(A) {
//     let len = 0;
//     for (let i = 0; i < A.length-1; i++) {
//         let count = 0
//         for (let j = i+1; j < A.length-1; j++) {
//             if (A.includes(A[i]+A[j])) {
//                 count++
//             }
//         }
//         len += count
//     }
//     return len
// };


// Justin's solution
var lenLongestFibSubseq = function (A) {
    let longest = 0;
    let count = 2;
    for (let i = 0; i < A.length; i++) {
        for (let j = i + 1; j < A.length; j++) {
            let [a, b] = [A[i], A[j]]
            while (A.includes(a + b)) {
                [a, b] = [b, a + b]
                count++
            }
            if (count > 2 && count > longest) {
                longest = count
            }
            count = 2
        }
    }
    return longest
}
console.log(lenLongestFibSubseq([1,3,7,11,12,14,18]));
const arr = [1,3,7,11,12,14,18]

function productFib(prod){
    let [a, b] = [0, 1]
    while (a*b <= prod) {
      if (a * b == prod) {
        return [a, b, true]
      }
      [a, b] = [b, a+b]
    }
    return [a, b, false]
}