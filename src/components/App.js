import React from 'react'
import './App.css'

class App extends React.Component {
  state = {
    quote: null,
    weather: null,
    bg: ['aryastark', 'branstark', 'brienne', 'cersie', 'jonsnow'],
    currentImg: 0
  }

  componentDidMount() {
    fetch('https://got-quotes.herokuapp.com/quotes')
      .then(res => res.json())
      .then(data => {
        this.setState({ quote: data })
      })

    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=lagos&APPID=bb0a8d645a922767b12d52c814083dba'
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ weather: data })
      })
  }

  handleClick = () => {
    fetch('https://got-quotes.herokuapp.com/quotes')
      .then(res => res.json())
      .then(data => {
        this.setState({ quote: data })
      })
  }

  renderQuote = () => {
    if (!this.state.quote) {
      return <div>Loading...</div>
    }
    return (
      <div>
        {this.state.quote.quote}
        <div style={{ fontSize: '1rem', marginTop: '1rem' }}>
          -- {this.state.quote.character}
        </div>
      </div>
    )
  }

  displayWeather = () => {
    if (!this.state.weather) {
      return <div></div>
    }
    return (
      <div className="weather-icon">
        <img
          src={`https://openweathermap.org/img/wn/${this.state.weather.weather[0].icon}@2x.png`}
          alt="weather icon"
        ></img>
        <div className="desc">
          {this.state.weather.main.temp - 273.15}
          <span> &deg;C</span>
          <div>{this.state.weather.name}</div>
        </div>
      </div>
    )
  }

  displayTweet = () => {
    if (!this.state.quote) {
      return <div></div>
    }
    return (
      <a
        href={`https://twitter.com/intent/tweet?text=${this.state.quote.quote} - ${this.state.quote.character}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>
          Send a raven <i className="fab fa-twitter"></i>
        </button>
      </a>
    )
  }

  render() {
    return (
      <div>
        {this.displayWeather()}
        <div className="App container">
          <div className="quote">
            <div className="quote-body">
              <i className="fas fa-quote-left"></i>
              <div>
                {this.renderQuote()}
                <button
                  style={{ marginRight: '10px' }}
                  onClick={this.handleClick}
                >
                  Get another GOT Quote
                </button>
                {this.displayTweet()}
              </div>
            </div>
          </div>
        </div>
        <footer>Copyright &copy; 2020 kayodeFad</footer>
      </div>
    )
  }
}

export default App
