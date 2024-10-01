// #popclip
// name: ReverseString
// identifier: de.gresch.reversestring
// description: Reverses the selected string
// icon: square filled RS
// popclip version: 4615

exports.action = (input) => {
    popclip.pasteText([...input.txt].reverse().join(""));
  };