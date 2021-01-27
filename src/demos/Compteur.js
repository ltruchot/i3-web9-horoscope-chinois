import { useState } from 'react';

function Compteur() {
  const [val, setVal] = useState(0);
  const [text, setText] = useState('');

  const increment = () => {
    setVal(val + 1);
    setText(`${text}yo`);
  };

  return (
    <div>
      {text}{val}
      <div>compteur: {val}</div>
      <button
        onClick={increment}
        type="button"
        className="bg-blue-800 text-white"
      >incremente le compteur
      </button>{val}
    </div>
  );
}
export default Compteur;
