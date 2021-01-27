import { truncate } from './string';

test('Ici je teste le fonction truncate', () => {
  console.log(truncate('bonjour', 3) === 'bon...');
  console.log(truncate('bonjour', 4) === 'bonj...');
  console.log(truncate('aurevoir', 4) === 'aure...');
  console.log(truncate('aurevoir', 10) === 'aurevoir');
  console.log(truncate('toto', 4) === 'toto');
});
