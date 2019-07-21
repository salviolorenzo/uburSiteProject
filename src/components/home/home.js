import React from 'react';
import { Route, Link } from 'react-router-dom';
import './home.scss';
import Clip2 from './images/VJ_Clip_2_V2.mov';
import ReactPlayer from 'react-player';
import Products from '../products/Products';

export default () => {
  return (
    <>
      <div className="heroVid">
        <div className="videoPlaceHolder" />
      </div>
      <Products />
    </>
  );
};
