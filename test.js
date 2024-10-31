function generatePassword(length) {
  let pass = [];
  const options = [];
  if (shouldIncludeLowerCase()) options.push(randomLowerCase);
  if (shouldIncludeUpperCase()) options.push(randomUpperCase);
  if (shouldIncludeNumbers()) options.push(randomNumber);
  if (shouldIncludeSymbols()) options.push(randomSymbol);

  if (options.length === 0) {
    return 'Veuillez sélectionner au moins une option.';
  }
  for (let i = 0; i < length; i++) {
    const randomFunc = arrayRandom(options);
    pass.push(randomFunc());
  }
  pass = pass.sort(() => Math.random() - 0.5);

  return pass.join('');
}
