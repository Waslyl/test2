/**
 * Génère et retourne un mot de passe sécurisé.
 *
 * @param {number} length La taille que doit faire le mot de passe.
 * @returns {string} Un mot de passe sécurisé
 */
function generatePassword(length) {
  let password = [];
  
  // Création d'une liste de fonctions en fonction des options choisies
  const options = [];
  if (shouldIncludeLowerCase()) options.push(randomLowerCase);
  if (shouldIncludeUpperCase()) options.push(randomUpperCase);
  if (shouldIncludeNumbers()) options.push(randomNumber);
  if (shouldIncludeSymbols()) options.push(randomSymbol);

  // Vérifie que des options sont disponibles pour éviter une boucle infinie
  if (options.length === 0) {
    return 'Veuillez sélectionner au moins une option.';
  }

  // Remplissage du mot de passe jusqu'à la longueur souhaitée
  for (let i = 0; i < length; i++) {
    const randomFunc = arrayRandom(options);
    password.push(randomFunc());
  }

  // Mélange aléatoire des caractères pour une meilleure sécurité
  password = password.sort(() => Math.random() - 0.5);

  return password.join('');
}