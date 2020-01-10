import React from 'react';
import './home.scss';
import ReactPlayer from 'react-player';
import Products from '../products/Products';
import epVid from './images/IMG_1923.mov';
import epPoster from './images/epPoster.png';

// import { TwitterTimelineEmbed, TwitterFollowButton } from 'react-twitter-embed';
// import InstaFeed from '../InstaFeed/InstaFeed';

const dateCheck = () => {
  let currentDate = new Date();
  let targetDate = new Date('2020-01-09 21:00:00 GMT-0800');

  if (currentDate >= targetDate) {
    return 'NOW!';
  } else {
    return 'AT 9PM PST';
  }
};

export default () => {
  dateCheck();
  return (
    <>
      <div className='heroVid'>
        <h1>
          PAINFUL CHOICE EP OUT <span>{dateCheck()}</span>
        </h1>
        <div className='videoPlaceHolder'>
          <ReactPlayer
            url={epVid}
            config={{
              file: { url: epVid, poster: epPoster, forceVideo: true },
              poster: epPoster
            }}
            // file={epVid}
            loop={true}
            controls={true}
            playing
            width='100%'
            height='100%'
          />
        </div>
      </div>
      <Products />
    </>
  );
};
