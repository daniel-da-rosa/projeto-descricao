import { useState, useEffect } from 'react';
import Header from './componentes/Header';
import SelectOpcao from './componentes/SelectOpcao';

function App() {
  const [selecionado, setSelecionado] = useState(Array(6).fill(''));

  useEffect(() => {
   
  }, [selecionado]);

  return (
    <>
      <Header />
      <SelectOpcao selecionado={selecionado} setSelecionado={setSelecionado}/>
      
    </>
  );
}

export default App;

