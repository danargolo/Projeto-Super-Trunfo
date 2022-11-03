import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName, cardImage, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardRare, cardTrunfo,
      checker, onDeleteClick, id } = this.props;

    return (
      <div>
        <p data-testid="name-card">{ cardName }</p>
        <img
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
        />
        <p data-testid="description-card">{ cardDescription }</p>
        <p data-testid="attr1-card">{ cardAttr1 }</p>
        <p data-testid="attr2-card">{ cardAttr2 }</p>
        <p data-testid="attr3-card">{ cardAttr3 }</p>
        <p data-testid="rare-card">{ cardRare }</p>
        { cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : null }
        { checker === 'deck'
          ? (
            <button
              id={ id }
              type="button"
              name="delete"
              data-testid="delete-button"
              onClick={ onDeleteClick }
            >
              Excluir
            </button>
          )
          : null}
      </div>
    );
  }
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  checker: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default Card;
