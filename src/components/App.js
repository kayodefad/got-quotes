import React from 'react'
import './App.css'

class App extends React.Component {
  state = {
    quote: null,
    weather: null,
    images: [
      'aryastark',
      'branstark',
      'brienne',
      'cersie',
      'jonsnow',
      'sansa',
      'dragon'
    ],
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

    this.interval = setInterval(() => this.changeBackgroundImage(), 7000)
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  changeBackgroundImage() {
    let newCurrentImg = 0
    const { images, currentImg } = this.state
    const noOfImages = images.length

    if (currentImg !== noOfImages - 1) {
      newCurrentImg = currentImg + 1
    }

    this.setState({ currentImg: newCurrentImg })
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
      <div className="quoteContainer">
        {this.state.quote.quote}
        <div
          style={{ fontSize: '1rem', marginTop: '1rem', fontStyle: 'italic' }}
        >
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
          {(this.state.weather.main.temp - 273.15).toFixed(0)}
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
        href={`https://twitter.com/intent/tweet?text=${this.state.quote.quote} -- ${this.state.quote.character} https://kayodefad.github.io/got-quotes/`}
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
    const {images, currentImg} = this.state
    // const urlString = "../images/aryastark.jpg"
    return (
      <div style={{background: `url(${require(`../images/${images[currentImg]}.jpg`)}) no-repeat center center/cover`, transition: 'background 2s ease-in-out'}}>
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
        <footer>
          Copyright &copy; 2020 kayodeFad{' '}
          <a
            style={{ color: '#fff' }}
            href="https://github.com/kayodefad"
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </a>
        </footer>
      </div>
    )
  }
}

export default App
