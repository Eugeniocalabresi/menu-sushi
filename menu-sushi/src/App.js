import React, {Component} from 'react';
import Navbar from './components/navbar';
import Card from './components/card';




class App extends Component {

  constructor() {
    super();
    this.state = { cards: [] };
  }

  async getCategories() {
    const response = await fetch("http://localhost:5000/");
    //console.log(response.text());
    const data = await response.json();
    this.setState({ cards: data });
  }

  componentDidMount() {
    this.getCategories();
  }

  handleDecrement = card => {   //function to decrese the number of sushi ordered
    const cards = [...this.state.cards];
    const id = cards.indexOf(card);
    cards[id] =  { ...card};
    if(cards[id].quantità > 0){  //not possible less than 0
      cards[id].quantità--;
      this.setState({cards});
    }
    
  }

  handleIncrement = card => {  //function to increment the number of sushi ordered
    const cards = [...this.state.cards];
    const id = cards.indexOf(card);
    cards[id] =  { ...card};
    cards[id].quantità++;
    this.setState({cards});
  }

  render(){
    return (
      <>
        <Navbar />
        <div className='container' style={{textAlign: 'center'}}>
          <h1>Menù sushi:</h1>
          
          <div className='row text-center'>
            {this.state.cards.map(card =>(
                <Card 
                  key = {card.id}
                  onDecrement = {this.handleDecrement}
                  onIncrement = {this.handleIncrement}
                  card = {card}
                />
                
              ))}            
          </div>
        </div>
        
      </>
    );
  }
  
}

export default App;
