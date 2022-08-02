function getFlagValue(field) {
  const index = process.argv.indexOf(field);

  return process.argv[index + 1];
}

module.exports = getFlagValue;

// field --> --name
// index --> 2
// return[2] --> --name