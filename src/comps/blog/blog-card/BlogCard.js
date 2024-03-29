import "./blog-card.css";
import FindLinks from "../blog-detail/FindLinks";

const BlogCard = ({ post }) => {
  const setBlogBodyLength = (text) => {
    const arr = text.split(" ");
    const output = [];
    for (let i = 0; i < 100; i++) {
      output.push(arr[i]);
    }
    return output.join(" ");
  };

  const openPhoto = () => {};
  return (
    <div className="blog-card">
      <img src={post.images} alt={post.title} onClick={() => openPhoto()} />
      <div>
        <h1>{post.title}</h1>
        <h2>{post.date}</h2>
        <p>
          <FindLinks text={setBlogBodyLength(post.body)} />
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
