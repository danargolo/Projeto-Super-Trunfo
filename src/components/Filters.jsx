import React from 'react';
import PropTypes from 'prop-types';

class Filters extends React.Component {
  render() {
    const { filterName, onInputChange } = this.props;
    return (
      <div>
        <label htmlFor="filterName">
          <input
            type="text"
            data-testid="name-filter"
            name="filterName"
            placeholder="Nome"
            value={ filterName }
            onChange={ onInputChange }
          />
          Filtros de Busca
        </label>
      </div>
    );
  }
}

Filters.propTypes = {
  filterName: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Filters;
