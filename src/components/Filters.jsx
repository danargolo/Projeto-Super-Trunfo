import React from 'react';
import PropTypes from 'prop-types';

class Filters extends React.Component {
  render() {
    const { nameFilter, rareFilter, trunfoFilter, onInputChange, disabled } = this.props;
    return (
      <div>
        <label htmlFor="nameFilter">
          <input
            type="text"
            data-testid="name-filter"
            name="nameFilter"
            placeholder="Nome"
            disabled={ disabled }
            value={ nameFilter }
            onChange={ onInputChange }
          />
          <select
            name="rareFilter"
            data-testid="rare-filter"
            placeholder="Raridade"
            disabled={ disabled }
            value={ rareFilter }
            onChange={ onInputChange }
          >
            <option value="todas">Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
          <input
            type="checkbox"
            name="trunfoFilter"
            data-testid="trunfo-filter"
            checked={ trunfoFilter }
            onChange={ onInputChange }
          />
          Filtros de Busca
        </label>
      </div>
    );
  }
}

Filters.propTypes = {
  nameFilter: PropTypes.string.isRequired,
  rareFilter: PropTypes.string.isRequired,
  trunfoFilter: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Filters;
