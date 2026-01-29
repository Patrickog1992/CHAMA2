import React from 'react';

const WarningBar: React.FC = () => {
  return (
    <div className="bg-red-700 text-white text-center py-3 px-4 text-sm md:text-base font-medium shadow-md">
      <p className="max-w-4xl mx-auto leading-tight">
        <span className="font-bold">ATENÇÃO:</span> O início do ano marca a abertura de um novo ciclo energético. No <span className="text-yellow-300 font-bold">29 de janeiro de 2026</span> o Ritual da Chama de 5 Noites atua com força ampliada, acelerando o retorno de um amor perdido ou a atração irresistível de um novo amor, despertando desejo e conexão intensa.
      </p>
    </div>
  );
};

export default WarningBar;