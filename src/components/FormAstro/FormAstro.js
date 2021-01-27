import { useRef, useState } from 'react';
import { getSign } from '../../functions/domain';

function FormAstro() {
  const ipt = useRef();
  const [signeAstrologique, setSigneAstrologique] = useState('');

  const calculateSign = (e) => {
    e.preventDefault();
    const val = Number(ipt.current.value);
    const signFound = getSign(val);
    setSigneAstrologique(signFound);
  };

  return (
    <form className="p-4">
      Quelle année êtes vous né ???<input className="bg-gray-200" ref={ipt} />
      <button
        className="bg-blue-800 text-white"
        type="submit"
        onClick={calculateSign}
      >envoyer
      </button>
      <br />
      {signeAstrologique}
    </form>
  );
}

export default FormAstro;
