import React from 'react';
import { Route, Link } from 'react-router-dom';
import './home.scss';
import Clip2 from './images/VJ_Clip_2_V2.mov';
import ReactPlayer from 'react-player';
import Products from '../products/Products';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton
} from 'react-twitter-embed';

export default () => {
  return (
    <>
      <div className="heroVid">
        <div className="videoPlaceHolder" />
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
