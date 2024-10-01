// #popclip
// name: ReverseString
// identifier: de.gresch.reversestring
// description: Reverses the selected string
// icon: square filled RS
// popclip version: 4615
// language: javascript

exports.action = function (input) {
  popclip.pasteText(input.txt.split('').reverse().join(''));
};