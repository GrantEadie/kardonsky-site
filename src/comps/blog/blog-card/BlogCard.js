import "./blog-card.css";

const BlogCard = ({ post }) => {
  return (
    <div className="blog-card">
      <img src={post.photo} alt={post.title} />
      <div>
        <h1>{post.title}</h1>
        <h2>{post.date}</h2>
        <p>{post.body}</p>
      </div>
    </div>
  );
};

export default BlogCard;
