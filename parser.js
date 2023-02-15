
const tokenize = (program) => {
  const comment = /\/\/.*/
  const string = /"(?:\\.|[^\\"])*"?/;
  const operators = /[.+*-]/
  const delimiters = /[()\[\]{}]/
  const identifier = /\w+/
  const regexp = new RegExp(
    [
      comment.source,
      string.source,
      operators.source,
      delimiters.source,
      identifier.source
    ].join("|"),
    "g"
  );
  const matches = [];
  let match;
  while ((match = regexp.exec(program)) !== null) {
    console.log(match);
    matches.push(match[0]);
  }
  return matches;
}

export {tokenize}
