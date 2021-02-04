import React from "react";
import "./Blogs.css";

import Header from "../utilities/Header/Header";
import Button from "../utilities/Button/Button";

import food1 from "../img/food1.jpg";
import usc from "../img/usc.jpg";
import workout from "../img/workout.jpg";

const Blogs = () => {
  return (
    <div className="blogs">
      <Header title="Blogs" />
      <div className="blogs__container">
        <div className="blogs__container__square">
          <div
            className="blogs__container__square__img"
            onClick={() =>
              window.open(
                "https://medium.com/@yuanjungdavidlin/last-updated-01-29-2019-87c3b60d19e"
              )
            }
          >
            <img src={food1} alt="Food1" />
          </div>
          <div className="blogs__container__square__content">
            <span>Jan. 29, 2019 | BODY BUILDING</span>
            <h2>Body Building</h2>
            <p>
              No doubt that workout makes my life more happier. In order to make
              progress more efficient. How to cook and how to pick clean food
              especially protein is crucial for body building.
            </p>
          </div>
        </div>
        <div className="blogs__container__square">
          <div
            className="blogs__container__square__img"
            onClick={() =>
              window.open(
                "https://medium.com/@yuanjungdavidlin/%E7%BE%8E%E5%9C%8B%E7%95%99%E5%AD%B8%E5%BF%83%E5%BE%97-497ab2c6b7dd"
              )
            }
          >
            <img src={usc} alt="usc" />
          </div>
          <div className="blogs__container__square__content">
            <span>Feb. 12, 2019 | STUDY ABROAD</span>
            <h2>Study at USC</h2>
            <p>
              Having a wonderful journey in USC with lots of lovely friend. At
              the sametime, enjoying leisure life such as watching NFL,
              traveling across the United States, make fun of roommates is also
              the best memory in my life.
            </p>
          </div>
        </div>
        <div className="blogs__container__square">
          <div
            className="blogs__container__square__img"
            onClick={() =>
              window.open(
                "https://medium.com/@yuanjungdavidlin/2019-%E5%B9%B4%E5%BA%A6%E5%9B%9E%E9%A1%A7-5c99e64121e9"
              )
            }
          >
            <img src={workout} alt="workout" />
          </div>
          <div className="blogs__container__square__content">
            <span>Jan 17, 2020 | My Life</span>
            <h2>Retrospect 2019</h2>
            <p>
              In 2019, inflation impact our saving year by year. Learning how to
              invest your money properly is important than how much you earn.
              Invest in ETF is the best method for risk diversification such as
              VTI and VT.
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
