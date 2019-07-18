import React from 'react';
import { Route, Link } from 'react-router-dom';
import './home.scss';
import Clip2 from '../../assets/VJ_Clip_2_V2.mp4';
import ReactPlayer from 'react-player';

export default () => {
  return (
    <div className="heroVid">
      <video>
        <source src="../../assets/VJ_Clip_2_V2.mov" type="video/mp4" />
      </video>
    </div>
  );
};
