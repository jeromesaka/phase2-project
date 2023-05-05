import { useState } from "react";

function LikeStyle({ styleId }) {
  const [count, setCount] = useState(0);

  function handleLike() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleLike}>
      {count} Likes {"\uD83D\uDC4D"}
    </button>
  );
}

export default LikeStyle;