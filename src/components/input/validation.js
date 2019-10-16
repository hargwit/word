function hasDuplicates(word) {
  const chars = [...word]
  return chars.reduce((result, char) => {
    return result || chars.indexOf(char) !== chars.lastIndexOf(char)
  }, false)
}

function checkLength(word) {
  if (word.length < 4) {
    return -1
  }
  if (word.length > 4) {
    return 1
  }
  return 0
}

export { hasDuplicates, checkLength }
