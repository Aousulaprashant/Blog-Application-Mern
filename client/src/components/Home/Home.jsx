import React from "react";
import Blog from "../IMG/BLOG_IMG.png";
import { Data } from "../Data";
import { Link, useSearchParams } from "react-router-dom";
import { Posts } from "./Posts";

const Home = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  return (
    
    <div className="home">
      <h1>P BLOG'S</h1>
      <div className="banner">
        <div className="text-blog">
          
          <p>
            <marquee>Every blog post is a piece of your journey. Share it with the world</marquee>
          </p>
        </div>
        <img src={Blog} alt="" className="banner-image" />
      </div>
      <div className="blog-container">
        <div className="catagiry">
          <Link
            to={`/createpost?category=${category || ""} `}
            className="create-blog-link"
          >
            <button className="create-blog-button">Create Blog</button>
          </Link>
          {Data.map((category) => {
            return (
              <Link
                key={category.id}
                to={`/?category=${category.type}`}
                className="button-link"
              >
                <button className="category">{category.type}</button>
              </Link>
            );
          })}
        </div>
        <div className="blog-list">
          <Posts />
        </div>
      </div>
    </div>
  );
};

export default Home;
