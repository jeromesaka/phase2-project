import { useState } from "react";

function CommentsForm({ styleId }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    const newComment = { author: name, text: comment };
    setComments([...comments, newComment]);

    fetch(`http://localhost:3000/styles/${styleId}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));

    setName("");
    setComment("");

    window.prompt("Thanks for your feedback!");
  }
  

  return (
    <form onSubmit={handleSubmit}>
        <fieldset>
        <p>Feedback about out our general services and prices:</p>
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Give us feedback"
        value={comment}
        onChange={(event) => setComment(event.target.value)}
      />
      <button type="submit">Feedback</button>
      <div>
        {comments.map((comment, index) => (
          <div key={index}>
            <p>Name : {comment.author}<br></br>
           Feedback : {comment.text}</p>
          </div>
        ))}
      </div>
      </fieldset>
     </form>
  );
}

export default CommentsForm;