import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    name: '',
    description: '',
    image: '',
    number1: '0',
    number2: '0',
    number3: '0',
    rare: '',
    trunfo: false,
  };

  onInputChange = (event) => {
    const { name } = event.target;
    const value = name === 'trunfo' ? event.target.checked : event.target.value;
    this.setState({ [name]: value });
  };

  render() {
    const { name, description, image, number1, number2,
      number3, rare, trunfo } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
          cardName={ name }
          cardDescription={ description }
          cardImage={ image }
          cardAttr1={ number1 }
          cardAttr2={ number2 }
          cardAttr3={ number3 }
          cardRare={ rare }
          cardTrunfo={ trunfo }
        />
        <Card
          onInputChange={ this.onInputChange }
          cardName={ name }
          cardDescription={ description }
          cardImage={ image }
          cardAttr1={ number1 }
          cardAttr2={ number2 }
          cardAttr3={ number3 }
          cardRare={ rare }
          cardTrunfo={ trunfo }
        />
      </div>
    );
  }
}

export default App;
