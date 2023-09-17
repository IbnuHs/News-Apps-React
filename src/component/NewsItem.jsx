import React, { useState } from "react";

function NewsItem({ title, author, description, url, urlImage, publishedAt }) {
  const [image, setImage] = useState(urlImage);
  return (
    <div className="card newsItem p-3">
      <div className="imageNews d-flex">
        <img src={urlImage} className="card-img-top image-news" alt="" />
      </div>
      <div className="card-body">
        <h3 className="card-title titleNews">
          <a href={url} target="blank">
            {title}
          </a>
        </h3>
        <p className="card-text author">Author : {author}</p>
        <p className="card-text description">{description}</p>
        <p className="card-text publishedTime">{publishedAt}</p>
      </div>
    </div>
  );
}

export default NewsItem;
