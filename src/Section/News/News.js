import React, { useEffect, useState } from "react";
import "./News.css";
import { IoMdArrowRoundForward } from "react-icons/io";
import imageee from '../../Assets/card2.jpg'

import "./News.css";
const News = () => {
  const [news_, setNews_] = useState([]);
  const [showMoreNews, setShowMoreNews] = useState(false);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/younginnovations/internship-challenges/master/front-end/news_list.json"
    )
      .then((response) => response.json())
      .then((data) => setNews_(data.news))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  
  return (
    <div className="main-div">
      <div className="content-div">
        <h2>News</h2>
        <p>
          We aim to stop public funds siphoning off and we have a plan that will
          help. We are working at the national and EU levels to advance.
        </p>
      </div>
      <div className="news-card-main-div">
        {news_.map((item,index) => (
          <div className={`news-card news-card-${index} ${showMoreNews?`news-card-${index}-show`:`news-card-${index}-hide`}`} key={item.id}>
            <div className="news-card-img">
              <img src={item.image} alt={item.title} className="news-image" />
              {/* <img src={imageee} alt="" /> */}
            </div>

            <div className="news-card-heading">{item.title}</div>
            <div className="news-card-content">{item.content}</div>
            <a href="#">Learn More <IoMdArrowRoundForward /></a>
          </div>
        ))}
      </div>
      <button onClick={(()=>setShowMoreNews(!showMoreNews))}>{showMoreNews?'Hide some news':'View all news'}</button>
    </div>
  );
};

export default News;
