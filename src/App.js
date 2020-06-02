import React, { useState } from 'react';
import './App.css';

function LikesCounter(props) {
  const [likes, setLikes] = useState(props.likes);

  function incrementLikes() {
    let likesCount = likes + 1;

    setLikes(likesCount);
  }

  return (
    <div>
      <p className="mt-0">{likes} Likes</p>
      <a href="#" onClick={incrementLikes}>
        Like this post
      </a>
    </div>
  )
}

function PostsList(props) {
  const posts = props.data;

  const list = posts.map(post => 
    <div className="post">
      <h3 className="mb-0">{post.title}</h3>
      <LikesCounter likes={post.likes} />
    </div>
  );

  return (
    <div>
      {list}
    </div>
  )
}

function Feed() {
  // Fetches the data dynamically 
  // Usually useState and useEffect hooks are used

  const data = [{
    "id": 1,
    "title": "My first post",
    "likes": 0,
    "comments": [{
      "body": "This is the first comment.",
      "addedBy": "Ravi teja"
    }]
  }, {
    "id": 2,
    "title": "My second post title",
    "likes": 12,
    "comments": []
    }];

  return (
    <PostsList data={data}/>
  )
}

function Title() {
  return (
    <div>
      <h2>Components With React</h2>
      <p>The base component <strong>App</strong> renders child components below.</p>
    </div>
  )
}

function Footer() {
  return (
    <small>Thank You! I am a footer component.</small>
  )
}

function App() {
  return (
    <div className="App">
      <Title />
      <Feed />
      <Footer />
    </div>
  );
}

export default App;
