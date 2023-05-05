import { useState } from "react";

function AddStyleForm({ onAdd }) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const newStyle = { id, name, description, image, price };
    onAdd(newStyle);
    setId("");
    setName("");
    setDescription("");
    setImage("");
    setPrice("");
  }

  return (
    <div>
        <fieldset>
          <h4><u>ADD A STYLE HERE:</u></h4>
      <form onSubmit={handleSubmit}>
        <label>
          Style ID: 
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </label>
        <label>
          Style Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Description:
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label>
          Image URL:
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        </label>
        <label>
          Price:
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label><br></br><br></br>
        <button type="submit">Add Style</button>
      </form>
      </fieldset>
    </div>
  );
}

export default AddStyleForm;