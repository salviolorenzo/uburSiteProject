import React, { Component, Fragment, Image } from 'react';
import { buildUrl } from 'react-instafeed';
import useAbortableFetch from 'use-abortable-fetch';
import './instafeed.scss';

import InstagramEmbed from 'react-instagram-embed';

const Instafeed = () => {
  // const options = {
  //   accessToken: '12044357.36153a1.3bd55d151e94465993f7c5b2d3affe6f',
  //   clientId: '36153a140d6a42628c26bf6eb329ce9f',
  //   get: 'user', // popular, user
  //   locationId: null,
  //   resolution: 'standard_resolution', // thumbnail, low_resolution, standard_resolution
  //   sortBy: 'none', // none, least-commented, least-liked, least-recent, most-commented, most-liked, most-recent, random
  //   tagName: null,
  //   userId: 12044357
  // };
  // const { json, loading, error, abort } = useAbortableFetch(buildUrl(options));

  // if (loading) return 'Loading...';
  // if (error) return `Error: ${error}`;
  // if (!json) return null;

  // const { data, meta, pagination } = json;

  const urls = [
    'https://www.instagram.com/p/B0Wz5KcHAA6/',
    'https://www.instagram.com/p/BzoKWbShCLr/',
    'https://www.instagram.com/p/BzOPKgCB6DT/',
    'https://www.instagram.com/p/BzLeeh8BNA6/',
    'https://www.instagram.com/p/By-qgQihfea/',
    'https://www.instagram.com/p/By8Tjk3h0zq/',
    'https://www.instagram.com/p/BydfyGTBS88/',
    'https://www.instagram.com/p/Bya3jiwBsCi/',
    'https://www.instagram.com/p/ByV04COhCl-/',
    'https://www.instagram.com/p/ByTFZ6YBaqW/',
    'https://www.instagram.com/p/ByLjUxrBvUh/'
  ];

  return (
    <div className="instaFeedContainer">
      {urls.map((item, index) => {
        return (
          <InstagramEmbed
            url={item}
            maxWidth={320}
            hideCaption={true}
            containerTagName="div"
            protocol=""
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
          />
        );
      })}
    </div>
  );
};

export default Instafeed;
