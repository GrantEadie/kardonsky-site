import "./blog.css";
import BlogCard from "./blog-card/BlogCard";
import { sampleData } from "./sample-blog-data";

const Blog = () => {
  return (
    <div id="blog-holder">
      <div id="blog">
        <div
          className="page-header-container no-img"
        >
          <div className="page-header-text">
            <h2>what I've been up to</h2>
            <h1>my blog</h1>
          </div>
        </div>
        <div id="blog-body">
          <div id="blog-grid">
            {sampleData.map((post, index) => (
              <div className={`card-${index % 2}`} key={index}>
                <BlogCard post={post} key={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
