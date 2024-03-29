import "./blog.css";
import BlogCard from "./blog-card/BlogCard";
import { useNavigate, useOutletContext } from "react-router-dom";
import { getStuff } from "../../hooks/useFirestore";
import { useEffect, useState } from "react";

const Blog = () => {
  const navigate = useNavigate();
  const { user } = useOutletContext();
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const gotDocs = await getStuff("blog");
      setDocs(gotDocs.sort((a, b) => new Date(b.date) - new Date(a.date)));
    };
    fetchData();
  }, [setDocs]);

  return (
    <div id="blog-holder">
      {!docs.length ? (
        <div className="loading">
          <div className="dot-fire"></div>
        </div>
      ) : (
        <div id="blog">
          <div className="page-header-container no-img">
            <div className="page-header-text">
              <h2>what I've been up to</h2>
              <h1>my blog</h1>
            </div>
          </div>
          <div id="blog-body">
            <div id="blog-grid">
              {user ? (
                <div
                  className="new-blog-button"
                  onClick={() => navigate("/new-blog/")}
                >
                  Add a new blog post
                </div>
              ) : null}
              {docs.map((post, index) => (
                <div
                  className={`blog-card-wrapper`}
                  key={index}
                  onClick={() => navigate(`/blog/${post.id}`)}
                >
                  <BlogCard post={post} key={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
