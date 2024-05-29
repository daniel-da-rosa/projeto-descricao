import { useState, useEffect } from 'react';
import Header from './componentes/Header';
import SelectOpcao from './componentes/SelectOpcao';
import TextArea from './componentes/TextArea';
import Comando from './componentes/Comando';

function App() {
  const [selecionado, setSelecionado] = useState(Array(6).fill(''));
  const [comandoSQL, setComandoSQL] = useState('');

  useEffect(() => {
    console.log('Selecionado:', selecionado);
  }, [selecionado]);

  const gerarComando = () => {
    const sql = Comando(selecionado); // Função para gerar comando SQL
    setComandoSQL(sql);
  };

  return (
    <>
      <Header />
      <SelectOpcao selecionado={selecionado} setSelecionado={setSelecionado} gerarComando={gerarComando} />
      <TextArea comandoSQL={comandoSQL} />
    </>
  );
}

export default App;

