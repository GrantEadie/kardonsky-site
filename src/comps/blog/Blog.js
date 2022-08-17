import "./blog.css";
import BlogCard from "./blog-card/BlogCard";
import { sampleData } from "./sample-blog-data";

const Blog = () => {
  return (
    <div id="blog-holder">
      <div id="blog">
        <div id="blog-header">
          {/* <img src="https://firebasestorage.googleapis.com/v0/b/kardonsky-site.appspot.com/o/headshots%2FValerieKardonsky3.jpg?alt=media&token=1bdcd7c0-4463-45a4-a059-7cda1f0047a4" alt="valerie kardonsky headshot"/> */}
          <h2>what I've been up to</h2>
          <h1>my blog</h1>
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
