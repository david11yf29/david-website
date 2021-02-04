import React from "react";
import "./Blogs.css";

import Header from "../utilities/Header/Header";
import Button from "../utilities/Button/Button";

const Blogs = () => {
  return (
    <div className="blogs">
      <Header title="Blogs" />
      <div className="blogs__container">
        <div className="blogs__container__square">
          <div className="blogs__container__square__img">
            <img src="" alt="" />
            <span>APRIL 14, 2018</span>
          </div>
          <div className="blogs__container__square__content">
            <h2>Body Building</h2>
            <p>
              Having a awesome shape is important for everyone, no only for
              confident but also for goodlife. I will teach you step by step to
              achieve your goal.
            </p>
          </div>
        </div>
        <div className="blogs__container__square">
          <div className="blogs__container__square__img">
            <img src="" alt="" />
            <span>APRIL 14, 2018</span>
          </div>
          <div className="blogs__container__square__content">
            <h2>Body Building</h2>
            <p>
              Having a awesome shape is important for everyone, no only for
              confident but also for goodlife. I will teach you step by step to
              achieve your goal.
            </p>
          </div>
        </div>
        <div className="blogs__container__square">
          <div className="blogs__container__square__img">
            <img src="" alt="" />
            <span>APRIL 14, 2018</span>
          </div>
          <div className="blogs__container__square__content">
            <h2>Body Building</h2>
            <p>
              Having a awesome shape is important for everyone, no only for
              confident but also for goodlife. I will teach you step by step to
              achieve your goal.
            </p>
          </div>
        </div>
      </div>
      <div className="blogs__footer">
        <Button title="Read More" />
      </div>
    </div>
  );
};

export default Blogs;
