import { useEffect, useState } from "react";
import "./App.css";

//main render component
function App() {
  return (
    <div className="App">
      {/* call Button component */}
      <Button />
      <LoadPost />
    </div>
  );
}

// new button component with count function

const Button = () => {
  // useing state
  const [count, setCount] = useState(0);

  // increase count
  const increase = () => setCount(count + 1);
  const decrease = () => (count > 0 ? setCount(count - 1) : count);
  return (
    // create component elements
    <div style={{ marginBlockEnd: "20px" }}>
      <h1>{count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
};

// load data from api
const LoadPost = () => {
  const [allPost, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data.slice(0, 20)));
  }, []);

  return allPost.map((post) => {
    return <Post key={post.id} title={post.title} body={post.body} />;
  });
};

//post component
const Post = (props) => {
  return (
    <div className="container">
      <h2 className="title">{props.title}</h2>
      <p className="body-text">{props.body}</p>
    </div>
  );
};

export default App;
