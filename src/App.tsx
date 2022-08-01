import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { PostsContainer } from "./components/PostsContainer";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3005/images")
      .then((resp) => resp.json())
      .then((PostsFromServer) => setPosts(PostsFromServer));
  }, []);

  return (
    <div className="App">
      <Header />

      <PostsContainer posts={posts} />
    </div>
  );
}

export default App;
