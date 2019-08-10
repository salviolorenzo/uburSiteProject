import React, { Component } from 'react';
import './tour.scss';

export default class Tour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiKey: 'LMt7ZxhYTWBMi7cY',
      events: ''
    };
  }

  componentDidMount() {
    fetch(`https://api.songkick.com/api/3.0/artists/9542144/gigography.json?apikey=${
      this.state.apiKey
    }
    `)
      .then(r => r.json())
      .then(res => {
        let shows = res.resultsPage.results.event.reverse();
        this.setState({
          events: shows
        });
      });
  }

  checkEvents() {
    console.log(this.state.events);
  }

  render() {
    this.checkEvents();
    if (this.state.events.length > 0) {
      return (
        <div className="mainCont">
          <div className="shows">
            {this.state.events.map((item, index) => {
              return (
                <div className="showsItem" key={index}>
                  <h3>{item.displayName}</h3>
                  <a href={item.uri} target="_blank" rel="noreferrer noopener">
                    <button>Tickets</button>
                  </a>
                </div>
              );
            })}
            <span>
              powered by
              <a
                href="https://www.songkick.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Songkick
              </a>
            </span>
          </div>
        </div>
      );
    } else {
      return (
        <div className="mainCont">
          <div className="shows">
            <h3>Loading shows...</h3>
          </div>
        </div>
      );
    }
  }
}
