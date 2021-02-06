import React, { useEffect, useState } from "react";
import "./Photos.css";

import axios from "axios";

import Header from "../utilities/Header/Header";

const instagramAPI =
  "https://graph.instagram.com/v1.0/17841400029139525/media?access_token=IGQVJXNlBsZA1dINXB5ZAmlneWxlc0JHNGV1eVdVaFpPSXlPMlRVbnNlS0kwUDFreExSYjhQWi1hdUxFaFFvQ2wxZAkVpMFlMSWZAQNVNuYmdrTUtublFoeG5KVGp2c2NERXRwU2k5QnpMU1docUoxR1FhZA0F2Mjl4Q3VhdE5F&fields=id%2Ccaption&limit=25&after=QVFIUkhmbEZAjMjZA0dXFrY2hTTVRzUUtrQXROT2pSTjlBS0FCLWJXTTBUNXVNT2tQSllKNFZARRDlpdFNSZAFp6U3NsS2haSHh4cDJDMlV2bEItY1IwNnZAacmFn";

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

// const instagramAPI ="https://graph.instagram.com/v1.0/17841400029139525/media?access_token=IGQVJXNlBsZA1dINXB5ZAmlneWxlc0JHNGV1eVdVaFpPSXlPMlRVbnNlS0kwUDFreExSYjhQWi1hdUxFaFFvQ2wxZAkVpMFlMSWZAQNVNuYmdrTUtublFoeG5KVGp2c2NERXRwU2k5QnpMU1docUoxR1FhZA0F2Mjl4Q3VhdE5F&fields=id%2Ccaption&limit=25&after=QVFIUkhmbEZAjMjZA0dXFrY2hTTVRzUUtrQXROT2pSTjlBS0FCLWJXTTBUNXVNT2tQSllKNFZARRDlpdFNSZAFp6U3NsS2haSHh4cDJDMlV2bEItY1IwNnZAacmFn";

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
} */
}

// https://api.instagram.com/oauth/authorize
//   ?client_id=760217521278386
//   &redirect_uri=https://personal-website-db7c8.web.app/photos
//   &scope=user_profile,user_media
//   &response_type=code

// https://personal-website-db7c8.web.app/photos?code=AQDLuL-WUvjBmuvdmHY6f_M7PE_zN9wTLu8WQ5Q2dqjWTnem3uKUffAz4Pr0lBzcdQbv0ilnurh2PqvMxhu_bR32c6AUWzaKvaQH5wk2FSCY0DDVnjQ3fn-l-awBXcI0GUp0okJQmF0HmRLUydfngRCnbG5PSv62WswWefMVUyVAEZlyd0hHOzl40lIR8LxwByc8Ah5qA19b1737sVSYff7_umylwiHXdT73cg150hMYxw#_

// code: AQDLuL-WUvjBmuvdmHY6f_M7PE_zN9wTLu8WQ5Q2dqjWTnem3uKUffAz4Pr0lBzcdQbv0ilnurh2PqvMxhu_bR32c6AUWzaKvaQH5wk2FSCY0DDVnjQ3fn-l-awBXcI0GUp0okJQmF0HmRLUydfngRCnbG5PSv62WswWefMVUyVAEZlyd0hHOzl40lIR8LxwByc8Ah5qA19b1737sVSYff7_umylwiHXdT73cg150hMYxw

// {
//   "access_token": "IGQVJWTmNwV2w1UGYtYlNPaGUxOWJFdDcyRXhjRHk5cjFYV203RmpMM2ZAYVEpDUFg4SWhQOUVCamx2V2xwSlRWYXMtSlI4LWJ3eG1Db1BjQnJOZAjBlRlp4bVRkMjZANZAzNoczdmM0huZAVlKcmtkQldPbG1pWGFuY29FMFln",
//   "user_id": 17841400029139525
// }
