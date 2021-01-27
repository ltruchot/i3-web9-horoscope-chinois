import signes from '../data/signes';

// number -> string
// en divistant par
export const getSign = (annee) => signes[annee % 12].nom;

/*

  if ([2021, 2009, 1997].includes(annee)) {
    return 'Buffle';
  }
  if (annee === 2020) {
    return 'Rat';
  }
  if (annee === 2019) {
    return 'Cochon';
  }
  */

console.log(getSign(2021));
console.log(getSign(2020));
console.log(getSign(2019));
console.log(getSign(2018));
