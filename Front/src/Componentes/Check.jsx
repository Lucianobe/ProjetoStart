import React, { useState } from 'react';

function Check() {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);

  const handleClick = (checkboxNumber) => {
    // Determina qual checkbox foi clicado e atualiza o estado correspondente
    switch (checkboxNumber) {
      case 1:
        setIsChecked1(!isChecked1);
        break;
      case 2:
        setIsChecked2(!isChecked2);
        break;
      case 3:
        setIsChecked3(!isChecked3);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    // Obter os valores dos checkboxes selecionados e concatenar em uma string
    const selectedValues = [
      isChecked1 && "valor1",
      isChecked2 && "valor2",
      isChecked3 && "valor3"
    ].filter(Boolean).join(', ');

    console.log("Valores concatenados:", selectedValues);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          defaultValue="valor1"
          checked={isChecked1}
          onClick={() => handleClick(1)}
        />
        Opção 1
      </label>

      <label>
        <input
          type="checkbox"
          defaultValue="valor2"
          checked={isChecked2}
          onClick={() => handleClick(2)}
        />
        Opção 2
      </label>

      <label>
        <input
          type="checkbox"
          defaultValue="valor3"
          checked={isChecked3}
          onClick={() => handleClick(3)}
        />
        Opção 3
      </label>

      <div>
        <button onClick={handleSubmit}>Enviar</button>
      </div>
    </div>
  );
}

export default Check;