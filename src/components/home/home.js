import React from 'react';
import { Route, Link } from 'react-router-dom';
import './home.scss';
import Clip2 from './images/VJ_Clip_2_V2.mov';
import ReactPlayer from 'react-player';

export default () => {
  return (
    <>
      <div className="heroVid">
        <video>
          <source src={Clip2} type="video/mp4" />
        </video>
      </div>
      <div className="shop" />
    </>
  );
};
