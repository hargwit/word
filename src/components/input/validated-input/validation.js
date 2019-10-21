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

function addWarning(warnings, warning) {
  if (!warnings.includes(warning)) {
    return [...warnings, warning]
  }
  return [...warnings]
}

function removeWarning(warnings, warning) {
  return warnings.filter(w => w !== warning)
}

function anyWarning(warnings) {
  return warnings.length > 0
}

export { hasDuplicates, checkLength, addWarning, removeWarning, anyWarning }