import React, { Component } from 'react';
import './App.css';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import Urls from '../Components/Characters'

class App extends Component {
  constructor() {
    super()
    this.state = {
      characters: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    let characArray = [];
    Urls.map(url => {
      return (
        fetch(url).then(response => response.json())
          .then(result => characArray.push(result))
          .then(persons => {this.setState({ characters: characArray })})
      );
    });
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }

   render() {
    const { characters, searchfield } = this.state;
    let filteredCharacters = characters.filter(person => {
      return person.name.toLowerCase().includes(searchfield.toLowerCase())
    });
    return !characters.length ?
      <h1 className = "tc ma5 pa5 f1 dark-red underline"> LOADING </h1> :
      (
        <div className = "bg-light-purple ma0 pa0">
          <h1 className = "tc f1 b ma0 pa4 underline ttu code black" > Star Wars Characters </h1>
          <p className = "tc">Fetched using Swapi.co</p>
          <SearchBox searchChange = {this.onSearchChange} />
          <Scroll>
            <CardList characters = {filteredCharacters} />
          </Scroll>
        </div>
      );
  }
}
export default App;
