// https://www.codewars.com/kata/complementary-dna/train/javascript

let DNAStrand = (dna) => {
    let res = []
    for (let acid of dna) {
      switch (acid) {
        case "A":
          res.push("T")
          break;
        case "T":
          res.push("A")
          break;
        case "G":
          res.push("C")
          break;
        case "C":
          res.push("G")
          break;
      }
    }
    return res.join('')
  }
const strand1 = 'AAAA'
const strand2 = 'TTTT'
const strand3 = 'GCATTCGA'
console.log(DNAStrand(strand1))
console.log(DNAStrand(strand2))
console.log(DNAStrand(strand3))

// https://www.codewars.com/kata/stop-gninnips-my-sdrow/train/javascript

function spinWords(words){
    return words
        .split(' ')
        .map(word => word.length > 4 ? word.split('').reverse().join('') : word)
        .join(' ')
}
console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("This is a test"));
console.log(spinWords("This is another test"));

// https://www.codewars.com/kata/encrypt-this/train/javascript

var encryptThis = function(text) {
    return text
      .split(' ')
      .map(word => singleWordEncryption(word))
      .join(' ')
}
var singleWordEncryption = word => {
    var arr = word.split('');
    arr[0] = arr[0].charCodeAt(0);
    let temp = arr[1];
    arr[1] = arr[arr.length-1];
    arr[arr.length-1] = temp
    return arr.join('')
} 
console.log(encryptThis("A wise old owl lived in an oak"));

// https://www.codewars.com/kata/all-inclusive/train/javascript

function containAllRots(strng, arr) {
    let rotations = strng.length
    let str = strng
    while (rotations > 0) {
        let rot = rotateStr(str)
        if (!arr.includes(rot)) {
        return false
      }
      rotations--
    }
    return true
    function rotateStr([head, ...tail]){
      return [...tail, head].join('')
    }
}

console.log(containAllRots("XjYABhR", ["TzYxlgfnhf", "yqVAuoLjMLy", "BhRXjYA", "YABhRXj", "hRXjYAB", "jYABhRX", "XjYABhR", "ABhRXjY"]));
console.log(containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]));

// https://www.codewars.com/kata/simple-pig-latin/train/javascript