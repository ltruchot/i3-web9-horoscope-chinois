import { useState } from 'react';

// max Array -> Array
const max = (arr) => {
  let gagnant = {
    nom: '',
    medailles: 0,
  };
  for (const pays of arr) {
    if (pays.medailles > gagnant.medailles) {
      gagnant = pays;
    }
  }
  const gagnants = arr.filter((pays) => pays.medailles === gagnant.medailles);
  return gagnants.map((pays) => pays.nom).join(', ');
};

function JeuxOlympiques() {
  const [medailleBE, setMedailleBE] = useState(0);
  const [medailleJP, setMedailleJP] = useState(0);
  const [medailleFR, setMedailleFR] = useState(0);

  const gagnant = max([
    { nom: 'japon', medailles: medailleJP },
    { nom: 'belgique', medailles: medailleBE },
    { nom: 'france', medailles: medailleFR },
  ]);

  return (
    <div>
      Resultats des JO par pays
      <table className="border border-blue-500 border-solid">
        <tr>
          <td className="border border-blue-500 border-solid">
            <button
              onClick={() => setMedailleBE(medailleBE + 1)}
              type="button"
            >BE
            </button>
          </td>
          <td className="border border-blue-500 border-solid">
            <button
              onClick={() => setMedailleJP(medailleJP + 1)}
              type="button"
            >JP
            </button>
          </td>
          <td className="border border-blue-500 border-solid">
            <button
              onClick={() => setMedailleFR(medailleFR + 1)}
              type="button"
            >FR
            </button>
          </td>
        </tr>
        <tr>
          <td className="border border-blue-500 border-solid">
            {medailleBE}
          </td>
          <td className="border border-blue-500 border-solid">
            {medailleJP}
          </td>
          <td className="border border-blue-500 border-solid">
            {medailleFR}
          </td>
        </tr>
      </table>
      <p>Et notre grand gagne est... : {gagnant}</p>
    </div>
  );
}

export default JeuxOlympiques;
