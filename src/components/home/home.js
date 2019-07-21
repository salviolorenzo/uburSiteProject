import React from 'react';
import './home.scss';
import Clip2 from './images/VJ_Clip_2_V2.mov';
import ReactPlayer from 'react-player';
import Products from '../products/Products';
import { TwitterTimelineEmbed, TwitterFollowButton } from 'react-twitter-embed';

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
      <div className="twitterFeed">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="uburdub"
          options={{ height: 500 }}
        />
        <TwitterFollowButton
          screenName={'uburdub'}
          style={{ display: 'flex', 'justify-content': 'flex-end' }}
        />
      </div>
    </>
  );
};
