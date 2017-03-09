function countLetters(inputString) {
  var outputObject = {};
    for (var i = 0; i < inputString.length; i++) {
      // console.log('this is i: ', i);
      // console.log('this is input: ', inputString);
      var characters = inputString[i];
        if (characters in outputObject) {
          outputObject[characters] = outputObject[characters] + 1;
        } else if (characters != ' ') {
          outputObject[characters] = 1;
        }
    }
    return outputObject;
}

console.log(countLetters("lighthouse labs"));



// write function 'countLetters' that returns all unique characters
// how many instances of letter found in string
// return:
// {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// }

