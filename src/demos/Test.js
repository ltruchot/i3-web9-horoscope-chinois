import { useState } from 'react';
import { rand } from '../functions/random';

function Test() {
  // mes variables
  const animaux = ['🦄', '🐒', '🦁', '🦊', '🐺', '🐲', '🐨', '🐗', '🏔', '🐼', '🔮', '🦔', '🤖'];
  const sourire = ':)';
  const pleure = ':(';

  // mes states
  const [smiley, setSmiley] = useState(sourire);

  // si qqun click sur btn, change smiley
  const handleClick = () => {
    if (smiley === sourire) {
      setSmiley(pleure);
    } else {
      setSmiley(sourire);
    }
  };
  /*
  const compose = (f, g, a) => f(g(a));
  const setRandom = (arr) => compose(setSmiley, rand, arr);
  */

  return (
    <div>
      <div onClick={handleClick}>{smiley}</div>
      <button onClick={() => setSmiley(rand(animaux))/* setRandom(animaux) */}>choisir un animal</button>
    </div>
  );
}

export default Test;

/*
const fonction1 = (a) => a * 2;
const fonction2 = (arg) => console.log(arg);
fonction2(fonction1(10)) === fonction2(20);

// il y a un smiley qui rit et un bouton
// il y a un bouton -> qd le click dessus, le smiley rit/pleure/rit/pleure
// Bonus: il y a un autre bouton qui donne un emoticon d'animal...
// ...au hasard (parmi 3/4 animaux), à la place du smiley
*/
