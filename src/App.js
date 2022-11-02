import React from 'react';
import './App.css';
import Form from './components/Form';
import Card from './components/Card';

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
  };

  onInputChange = (event) => {
    const { name } = event.target;
    const value = name === 'cardTrunfo' ? event.target.checked : event.target.value;
    this.setState({ [name]: value }, () => {
      this.saveButtonValidator();
    });
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

  onSaveButtonClick = (event) => {
    console.log(event.target);
  };

  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, isSaveButtonDisabled } = this.state;
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
          />
        </div>
      </div>
    );
  }
}

export default App;
