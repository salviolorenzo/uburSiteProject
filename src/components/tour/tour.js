import React, { Component } from 'react';
import './tour.scss';

export default class Tour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiKey: 'LMt7ZxhYTWBMi7cY',
      events: []
    };
  }

  componentDidMount() {
    this.setState({
      events: []
    });
    console.log(this.state);
    // fetch(`https://api.songkick.com/api/3.0/artists/9542144/calendar.json?apikey=${this.state.apiKey}
    // `)
    //   .then(r => r.json())
    //   .then(res => {
    //     this.setState({
    //       events: res.resultsPage.results.event
    //     });
    //   });
  }

  displayEvents(events) {
    if (events.length > 0) {
      events.map((item, index) => {
        return (
          <div className='showsItem' key={index}>
            <div className='showText'>
              <h3>{item.displayName}</h3>
              <div>
                {item.venue.displayName} | | {item.location.city}
              </div>
            </div>
            <a href={item.uri} target='_blank' rel='noreferrer noopener'>
              <button>Tickets</button>
            </a>
          </div>
        );
      });
    } else {
      return (
        // <div>
        <h2>More shows coming soon!</h2>
        // </div>
      );
    }
  }

  setContainerClass(events) {
    if (events.length > 0) {
      return 'shows';
    } else {
      return 'moreShows';
    }
  }

  render() {
    // if (this.state.events) {
    return (
      <div className='mainCont'>
        <h2>Upcoming Shows</h2>
        <div className={this.setContainerClass(this.state.events)}>
          {this.displayEvents(this.state.events)}
          <span>
            powered by
            <a
              href='https://www.songkick.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Songkick
            </a>
          </span>
        </div>
      </div>
    );
    // } else {
    //   return (
    //     <div className='mainCont'>
    //       <div className='showsLoading'>
    //         <h3>Loading shows...</h3>
    //       </div>
    //     </div>
    //   );
    // }
  }
}
