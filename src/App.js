import React, { Component } from "react";
import MainHeader from "./components/Header/Mainheader.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Movies from "./components/Movies/Movies.jsx";

export class App extends Component {
  state = {
    movies: []
  }

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=c9bb809e&s=pirate')
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search }))
  }

  searchMovies = (str) => {
    fetch(`http://www.omdbapi.com/?apikey=c9bb809e&s=${str}`)
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search }))
  }

  render() {
    return (
      <div>
        <MainHeader searchMovies={this.searchMovies} />
        <Movies movies={this.state.movies} />
        <Footer />
      </div>
    )
  }

}

export default App



