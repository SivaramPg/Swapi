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
      <h1 className = "tc bg-dark-red"> LOADING </h1> :
      (
        <div className = "bg-blue">
          <h1 className = "tc f1 b  underline ttu code red dim" > Star Wars </h1>
          <SearchBox searchChange = {this.onSearchChange} />
          <Scroll>
            <CardList characters = {filteredCharacters} />
          </Scroll>
        </div>
      );
  }
}
export default App;
