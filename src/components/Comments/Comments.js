import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Comments.css';


function Comments() {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  const getData = async () => {
    const result = await axios.get(`http://localhost:3000/comments?recipeId=${id}`);
    return result.data;
  }

  useEffect(() => {
    getData().then(comments => setComments(comments));
  }, []);

  const onSubmit = () => {
    const data = {
      recipeId: id,
      username: "ann",
      date: "18.10.2020 18:15",
      text: newComment
    };
    axios.post(`http://localhost:3000/comments`, data)
      .then(result => {
        console.log(result);
      })
    setNewComment("");
  }

  const handleTextChanged = (event) => {
    setNewComment(event.target.value);
  }

  return (
    <div>
      <hr /><hr />
      <h1 className="comments">Comments</h1>
      <ul>
        {
          comments ?
            comments.map((comment, index) => (<li className="comments-form" key={index}>
              <label>{comment.username}</label> <br></br> {comment.text}</li>)) :
            "Loading..."
        }
      </ul>
      <form className="add-comment-form" onSubmit={onSubmit}>
        <input type="text" placeholder="Type a comment" autoComplete="off"
          name="comment-text" value={newComment} onChange={handleTextChanged} />
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default Comments;