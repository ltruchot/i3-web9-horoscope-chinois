export function truncate(mot, nombre) {
  let nouveauMot = mot.substring(0, nombre);
  if (mot.length > nombre) {
    nouveauMot += '...';
  }
  return nouveauMot;
}
