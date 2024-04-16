/**
 * Utiliser les ternaires en les chainants, pour éviter les if elseif else
 *
 * Renvoyer ">" si a supérieur à b
 * Renvoyer "<" si a inférieur à b
 * Renvoyer "=" si a égal à b
 *
 * Contraintes:
 *    - utiliser l'opérateur ternaire (if interdit)
 */

function ternaryChain(a, b) {
<<<<<<< HEAD
  return a > b ? ">" : a < b ? "<" : "=";
    
=======
  return a > b ? 
    '>' 
    : 
    a < b ? 
    '<' 
    : 
    '=';
>>>>>>> a5a5389a8148df444cf987bb5d54e819dfa03b07
}

module.exports = ternaryChain;
