import React, { useEffect, useState } from "react";
import "./Photos.css";

import axios from "axios";

import Header from "../utilities/Header/Header";

const Photos = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("Hello");
  }, []);

  return (
    <div className="photos">
      <Header title="Photos" />
      <div className="photos__container"></div>
      <div>This is my instagram Photos</div>
    </div>
  );
};

export default Photos;

{
  /* const instagramAPI =
  "https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,timestamp&access_token=IGQVJWdWNFajZAQYlN5eUpqLU9oNWdMQ1ltdnotZAkFVNnNmR2gzRjI2Vkl5VzNlU2lLRzlIa2ZAoZAERjWHhlVWZARclJwZAXItOHZAtSUV5Mk9fNllQcHVmYldqc0Njc3BpQXZAuQThXR0hsM2NyU0hyV2FkRAZDZD"; */
}

{
  /* const Photos = () => {
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
}; */
}
