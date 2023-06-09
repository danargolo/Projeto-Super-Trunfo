import React from 'react';
import './App.css';
import Form from './components/Form';
import Card from './components/Card';
import Filters from './components/Filters';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardImage: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardRare: 'normal',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    savedCards: [],
    hasTrunfo: false,
    nameFilter: '',
    rareFilter: 'todas',
    trunfoFilter: false,
    disabled: false,
  };

  onInputChange = (event) => {
    const { name, type, checked, value } = event.target;
    const val = type === 'checkbox' ? checked : value;
    this.setState({ [name]: val }, () => {
      this.saveButtonValidator();
      this.handleTrunfoFilter();
    });
  };

  handleTrunfoFilter = () => {
    const { trunfoFilter } = this.state;
    return trunfoFilter
      ? this.setState({ disabled: true })
      : this.setState({ disabled: false });
  };

  saveButtonValidator = () => {
    const { cardName, cardDescription, cardRare, cardImage, cardAttr1,
      cardAttr2, cardAttr3 } = this.state;
    const minAttr = 0;
    const maxAttr = 90;
    const sumMax = 210;

    const rule1 = cardName && cardDescription && cardImage && cardRare;
    const rule2 = (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)) <= sumMax;

    const checkAttr1 = Number(cardAttr1) >= minAttr && Number(cardAttr1) <= maxAttr;
    const checkAttr2 = Number(cardAttr2) >= minAttr && Number(cardAttr2) <= maxAttr;
    const checkAttr3 = Number(cardAttr3) >= minAttr && Number(cardAttr3) <= maxAttr;

    const rule3 = checkAttr1 && checkAttr2 && checkAttr3;

    const validator = rule1 && rule2 && rule3;
    this.setState({ isSaveButtonDisabled: !validator });
  };

  onSaveButtonClick = () => {
    const { cardName, cardDescription, cardRare, cardImage, cardAttr1,
      cardAttr2, cardAttr3, cardTrunfo } = this.state;

    const object = {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    };

    this.setState((prevState) => ({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      savedCards: [...prevState.savedCards, object],
    }), () => {
      this.setState({ hasTrunfo: this.handleHasTrunfo() });
    });
  };

  handleHasTrunfo = () => {
    const { savedCards } = this.state;
    const trunfoValidator = savedCards.some((card) => (card.cardTrunfo));
    return trunfoValidator;
  };

  onDeleteClick = (element) => {
    const { savedCards } = this.state;
    const { id } = element.target;

    const newSavedCards = savedCards.filter((card, index) => index !== Number(id));
    this.setState({ savedCards: newSavedCards });

    if (savedCards[Number(id)].cardTrunfo) {
      this.setState({ hasTrunfo: false });
    }
  };

  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, hasTrunfo, isSaveButtonDisabled, savedCards,
      nameFilter, rareFilter, trunfoFilter, disabled } = this.state;

    const filteredName = savedCards.filter((card) => (
      card.cardName.includes(nameFilter)));
    const filteredRare = filteredName.filter((card) => (
      card.cardRare === rareFilter || rareFilter === 'todas'));
    const filteredTrunfo = savedCards.filter((card) => card.cardTrunfo === true);

    const filter = trunfoFilter ? filteredTrunfo : filteredRare;

    return (
      <div>
        <h1>Tryunfo</h1>
        <div className="card">
          <Form
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardImage={ cardImage }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }

          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardImage={ cardImage }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            checker="preview"
            id={ 0 }
            onDeleteClick={ this.onDeleteClick }
          />
          <Filters
            nameFilter={ nameFilter }
            rareFilter={ rareFilter }
            trunfoFilter={ trunfoFilter }
            disabled={ disabled }
            onInputChange={ this.onInputChange }
          />
          <div className="deck">
            {
              filter.map((card, index) => (
                <Card
                  key={ index }
                  cardName={ card.cardName }
                  cardDescription={ card.cardDescription }
                  cardImage={ card.cardImage }
                  cardAttr1={ card.cardAttr1 }
                  cardAttr2={ card.cardAttr2 }
                  cardAttr3={ card.cardAttr3 }
                  cardRare={ card.cardRare }
                  cardTrunfo={ card.cardTrunfo }
                  checker="deck"
                  id={ index }
                  onDeleteClick={ this.onDeleteClick }
                />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
