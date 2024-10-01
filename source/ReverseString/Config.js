// #popclip
// name: ReverseString
// identifier: com.pilotmoon.popclip.extension.reversestring
// description: Reverses the selected string
// icon: square filled RS
// popclip version: 4615

exports.action = (input) => {
    popclip.pasteText([...input.txt].reverse().join(""));
  };