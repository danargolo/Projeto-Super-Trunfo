import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div className="form">
        <label htmlFor="name">
          Nome
          <input
            type="text"
            id="name"
            data-testid="name-input"
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="textarea"
            id="description"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="number">
          Atributos
          <input
            type="number"
            id="number"
            data-testid="attr1-input"
          />
          <input
            type="number"
            id="number"
            data-testid="attr2-input"
          />
          <input
            type="number"
            id="number"
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="image">
          Imagem
          <input
            type="text"
            id="image"
            data-testid="image-input"
          />
        </label>
        <label htmlFor="rare">
          Raridade
          <select
            id="rare"
            data-testid="rare-input"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <input
          type="checkbox"
          id="trunfo"
          data-testid="trunfo-input"
        />
        <button
          type="button"
          id="save"
          data-testid="save-button"
        >
          Salvar
        </button>
      </div>
    );
  }
}

export default Form;
