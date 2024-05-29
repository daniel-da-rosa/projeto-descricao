/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

export default function SelectOpcao({ selecionado, setSelecionado, gerarComando }) {
  const opcoes = ['Grupo', 'SubGrupo', 'Classe', 'Familia', 'Descrição', 'Versão'];
  
  const handleChange = (index, event) => {
    const newSelecao = [...selecionado];
    newSelecao[index] = event.target.value;
    setSelecionado(newSelecao);
  };

  const getDisponiveis = (index) => {
    // eslint-disable-next-line react/prop-types
    return opcoes.filter((opcao) => !selecionado.includes(opcao) || selecionado[index] === opcao);
  };

  return (
    <form className="flex flex-col items-center justify-center">
      <div className="flex flex-wrap justify-center w-1/2 shadow-sm rounded m-5 p-5 bg-gray-300 rounded-b-lg">
        {selecionado.map((value, index) => (
          <div key={index} className="w-1/3 align-middle p-2 flex flex-col m-2">
            <label className="text-gray-700" htmlFor={`opcao${index}`}>Opção {index + 1}:</label>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              name={`opcao${index}`}
              id={`opcao${index}`}
              value={value}
              onChange={(e) => handleChange(index, e)}
            >
              <option value="">Selecione</option>
              {getDisponiveis(index).map(opcao => (
                <option key={opcao} value={opcao}>{opcao}</option>
              ))}
            </select>
          </div>
        ))}
      </div>
      <button 
        type="button"
        className="w-1/3 bg-teal-700 text-white p-3 rounded-full hover:bg-teal-900"
        onClick={gerarComando}
      >
        Gerar comando
      </button>
    </form>
  );
}
