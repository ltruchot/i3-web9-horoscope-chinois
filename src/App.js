import { useState } from 'react';
import FormAstro from './components/FormAstro/FormAstro';
import Modal from './components/Modal/Modal';
import SigneChinois from './components/SigneChinois/SigneChinois';
import signes from './data/signes';

function App() {
  const attrs = {
    close: true,
  };
  /*
  const signesChinois = [];
  for (const signe of signes) {
    signesChinois.push(<SigneChinois
      nom={signe.nom}
      image={signe.img}
      desc={signe.description}
    />);
  }

  for (let i = 0; i < signes.length; i++) {
    signesChinois.push(<SigneChinois
      nom={signes[i].nom}
      image={signes[i].img}
      desc={signes[i].description}
    />);
  }
  */
  /*
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const arr3 = [0, ...arr1, ...arr2, 7];
  const obj1 = {
    a: 'toto',
    b: 'titi',
  };
  const obj2 = {
    ...obj1,
    c: 'tutu',
  };
  */
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setModalVisible(!modalVisible)}>toggle modal</button>
      <FormAstro />

      <div className="flex flex-wrap">
        {signes.map((signe) => (
          <SigneChinois
            nom={signe.nom}
            image={signe.img}
            desc={signe.description}
            key={signe.nom}
          />
        ))}
      </div>

      <Modal toggleVisibility={setModalVisible} visible={modalVisible} titre="Ma super modale" modalClass="main-modal" {...attrs}>
        <p>ursitena</p>
        saumetauniesatu
      </Modal>
      {/*
      <Modal titre="Ma super modale n°2" modalClass="confirm-modal" {...attrs}>
        toto titi
      </Modal>

      <Modal titre="Encore une autre" modalClass="error-modal" {...attrs}>
        Vous ne passerez pas !
      </Modal>
       */}
    </div>
  );
}

export default App;
