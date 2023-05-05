import React,{useState} from "react";

export default function UpdateStyle({onAdd}){
    const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const newStyle = { id, name, description, image, price };
    fetch(`http://localhost:3000/styles/${id}`,{
        method:"PUT", headers:{"Content-Type":"application/json"}
        ,body:JSON.stringify(newStyle)
    })
    .then((response) => response.json())
    .then((data) => onAdd(data))
    .catch((error) => console.error(error));

    onAdd(newStyle);
    setId("");
    setName("");
    setDescription("");
    setImage("");
    setPrice("");
  }
    return(
        <div>
        <fieldset>
        <h3><u>UPDATE A STYLE HERE:</u></h3>
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
        <button type="submit">Edit Style</button>
      </form>
      </fieldset>
    </div>
    )
}