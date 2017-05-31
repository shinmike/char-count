function countLetters(inputString){
  var outputObject = {};
  inputString = inputString.split(" ").join("");
  for (var i = 0; i < inputString.length; i++){
    var character = inputString[i];
    if (character in outputObject){
      outputObject[character] += 1;
    } else {
      outputObject[character] = 1;
    }
  }
  return outputObject;
}

console.log(countLetters("lighthouse in the house"));










// ---------------------------------- TESTING:

// var obj = {a: 1, b: 2, c: 3};

// for (var prop in obj) {
//   console.log('obj.' + prop, '=', obj[prop]);
// }

// // prop = a,b,c -> key
// // obj[prop] = 1,2,3 -> value

// // Output:
// // "obj.a = 1"
// // "obj.b = 2"
// // "obj.c = 3"



// ---------------------------------- ORIGINAL SOLUTION 1:

// function countLetters(inputString) {
//   var outputObject = {};
//     for (var i = 0; i < inputString.length; i++) {
//       var characters = inputString[i];
//         if (characters in outputObject) {
//           outputObject[characters] = outputObject[characters] + 1;
//         } else if (characters != ' ') {
//           outputObject[characters] = 1;
//         }
//     }
//     return outputObject;
// }
//
// console.log(countLetters("lighthouse labs"));

// ---------------------------------- ORIGINAL SOLUTION 2:

// function countLetters(inputString){
//   var outputCharacters = {};
//   for (var i = 0; i < inputString.length; i++){
//     // character is key
//     var character = inputString[i].toLowerCase();
//     // if character (key) is in outputCharacters (object)
//     if (character in outputCharacters) {
//       // value of the key = value of the key + 1
//       outputCharacters[character] = outputCharacters[character] + 1;
//       // if the chracter is not a space (' ')
//     } else if (character != ' ') {
//       // then assign value of 1
//       outputCharacters[character] = 1;
//     }
//   }
//   return outputCharacters;
// }
//
// console.log(countLetters("lighthouse in the house"));

