import { useState } from "react";

function Styles() {
  const [styles] = useState([]);

  const deleteStyle = (id) => {
    // setStyles(styles.filter((style) => style.id !== id));
    fetch(`http://localhost:3000/styles/${id}`,{
      method:"DELETE"
    })
    .then(res => res.json())
    .then(data => console.log(data))
  };

  return (
    <div id="styles">
      <h1>The Man Cave Collection😎:</h1>
      {styles.map((style) => (
        <div key={style.id} className="style">
          <h3>{style.name}</h3>
          <p>{style.description}</p>
          <img src={style.image} alt={style.name} />
          <button onClick={() => deleteStyle(style.id)}>Delete SYFY</button>
        </div>
      ))}
    </div>
  );
}

export default Styles;