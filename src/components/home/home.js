import React from 'react';
import './home.scss';
import ReactPlayer from 'react-player';
import Products from '../products/Products';
import { TwitterTimelineEmbed, TwitterFollowButton } from 'react-twitter-embed';
import InstaFeed from '../InstaFeed/InstaFeed';

export default () => {
  return (
    <>
      <div className="heroVid">
        <div className="videoPlaceHolder">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=ym9ke8rJksM"
            playing
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <Products />
      <InstaFeed />
      {/* <div className="twitterFeed">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="uburdub"
          options={{ height: 500, width: '100%' }}
        />
        <TwitterFollowButton screenName={'uburdub'} />
      </div> */}
    </>
  );
};
