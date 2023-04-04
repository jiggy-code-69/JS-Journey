// Write a function cutComment that takes one line of JavaScript and returns a possible line comment trimmed. If the line contains no line comment, null should be returned. For simplicity, we assume that the code does not contain the comment characters within a string.

// Example: cutCommt('let foo; // bar') should return 'bar'.

// unsing indexof

function cutComment(line) {
  const commentIndex = line.indexOf('//'); // find index of line comment
  if (commentIndex === -1) {
    return null; // no line comment found
  }
  const comment = line.slice(commentIndex + 2).trim(); // extract comment and trim whitespace
  return comment;
}



// using includes
function cutComment(line) {
  const commentCharacters = '//';
  if (!line.includes(commentCharacters)) {
    return null; // no line comment found
  }
  const commentIndex = line.indexOf(commentCharacters);
  const comment = line.slice(commentIndex + commentCharacters.length).trim(); // extract comment and trim whitespace
  return comment;
}
