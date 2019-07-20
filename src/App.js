import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import About from './components/about/about';
import Shop from './components/shop/shop';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
      menuIsOpen: false
    };
  }

  componentDidMount() {
    this.resize();
    window.addEventListener('resize', this.resize.bind(this));
  }

  resize() {
    if (window.innerWidth >= 700) {
      this.setState({
        isMobile: false,
        menuIsOpen: false
      });
    } else {
      this.setState({
        isMobile: true
      });
    }
  }

  handleMenuClick() {
    let isOpen = this.state.menuIsOpen;
    this.setState({
      menuIsOpen: !isOpen
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header
            isMobile={this.state.isMobile}
            menuIsOpen={this.state.menuIsOpen}
            handleMenuClick={this.handleMenuClick.bind(this)}
          />
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
