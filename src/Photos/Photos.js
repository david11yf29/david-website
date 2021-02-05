import React, { useEffect, useState } from "react";
import "./Photos.css";

import axios from "axios";

import Header from "../utilities/Header/Header";

const instagramAPI =
  "https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,timestamp&access_token=IGQVJWdWNFajZAQYlN5eUpqLU9oNWdMQ1ltdnotZAkFVNnNmR2gzRjI2Vkl5VzNlU2lLRzlIa2ZAoZAERjWHhlVWZARclJwZAXItOHZAtSUV5Mk9fNllQcHVmYldqc0Njc3BpQXZAuQThXR0hsM2NyU0hyV2FkRAZDZD";

const Photos = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(instagramAPI);
      console.log(response.data);
      setData(response.data);
    };
    fetchData();
  }, []);
  return (
    <div className="photos">
      <Header title="Photos" />
      <div className="photos__container">
        {data?.data.map((post) => {
          if (post.media_type === "IMAGE") {
            return <img src={post.media_url} alt={post.id} key={post.id} />;
          }
          return null;
        })}
      </div>
      <div>This is my instagram Photos</div>
    </div>
  );
};

export default Photos;

// Instagram App ID = "760217521278386"

// https://api.instagram.com/oauth/authorize
//   ?client_id=760217521278386
//   &redirect_uri=https://personal-website-db7c8.web.app/photos
//   &scope=user_profile,user_media
//   &response_type=code

// https://personal-website-db7c8.web.app/photos?code=AQBkfYA4nQXcFiYmmrDbn66mdpcGPYzt3sICNhDbU__9OE0Wugu9tQRf5pn9jbvDROe8S73Xrwwu2uahxWXdJFk7yShRwgFgTvIWg8UPP5UAGjpHXbRO2lg85_E_qqD9_E1QxdVosSzUv5xRAHCQI6qc5vihnIf3M2f0cpyQPB3hOuUiuGSh0qmxpNah06NimrbxgnFSuhbSAAwNiNFWAnUffLGRVhZWMJJKD8x0-Dd6aA#_

// curl -X POST \
//   https://api.instagram.com/oauth/access_token \
//   -F client_id=760217521278386 \
//   -F client_secret=cbdceffc7fcb3f77ef93c9eaef06be41 \
//   -F grant_type=authorization_code \
//   -F redirect_uri=https://personal-website-db7c8.web.app/photos \
//   -F code=AQBkfYA4nQXcFiYmmrDbn66mdpcGPYzt3sICNhDbU__9OE0Wugu9tQRf5pn9jbvDROe8S73Xrwwu2uahxWXdJFk7yShRwgFgTvIWg8UPP5UAGjpHXbRO2lg85_E_qqD9_E1QxdVosSzUv5xRAHCQI6qc5vihnIf3M2f0cpyQPB3hOuUiuGSh0qmxpNah06NimrbxgnFSuhbSAAwNiNFWAnUffLGRVhZWMJJKD8x0-Dd6aA

// {
//   "access_token": "IGQVJWaWRmWGhhRGNFUVNDeHltZA0huOXFjZAVA0cEhWN1VES01KaTdiV29DZAXhYcVJCUnNLSFB0YUdDOUFjaDhEOWVGd2xaRFp1MGZAkVmxaeG56bGphaHo1MU5SOXUzR2pGMDkyS01RQUxPdFNIdlJySndEdVR6ZAUNIZAHhj",
//   "user_id": 17841400029139525
// }
