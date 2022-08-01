import { PostItem } from "../data/PostItem";

import "./Post.css";

type Props = { post: PostItem };

export function Post({ post }: Props) {
  return (
    <article className="image-card">
      <h2 className="title">{post.title}</h2>
      <img src={post.image} className="image" />
      <div className="likes-section">
        <span className="likes">{post.likes} likes</span>
        <button className="like-button">♥</button>
      </div>
      <ul className="comments">
        {post.comments.map((comment) => (
          <li key={comment.id}>{comment.content}</li>
        ))}
      </ul>
    </article>
  );
}
