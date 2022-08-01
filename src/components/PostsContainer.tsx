import { Dispatch, SetStateAction } from "react";
import { PostItem } from "../data/PostItem";
import { Post } from "./Post";

import "./PostsContainer.css";

type Props = {
  posts: PostItem[];
};

export function PostsContainer({ posts }: Props) {
  return (
    <section className="image-container">
      <form className="comment-form image-card">
        <h2 className="title">New Post</h2>
        <input
          className="comment-input"
          type="text"
          name="title"
          id="title"
          placeholder="Add a title..."
        />
        <input
          className="comment-input"
          type="url"
          name="image"
          id="image"
          placeholder="Add an image url..."
        />
        <button className="comment-button" type="submit">
          Post
        </button>
      </form>

      {posts.map((post: PostItem) => (
        <Post key={post.id} post={post} />
      ))}
    </section>
  );
}
