import AsyncImage from "../../tools/AsyncImage";
import "./blog-card.css";

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
      <AsyncImage
        src={post.images}
        alt={post.title}
        onClick={() => openPhoto()}
      />
      <div>
        <h1>{post.title}</h1>
        <h2>{post.date}</h2>
        <p>{setBlogBodyLength(post.body)}...</p>
      </div>
    </div>
  );
};

export default BlogCard;
