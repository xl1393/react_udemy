import React from "react";

export function Stats({ items }) {
  const numPacked = items.filter((item) => item.packed).length;
  return (
    <footer className="stats">
      <em>
        you have {items.length} items on your list and you already complete{" "}
        {(numPacked / items.length) * 100} %
      </em>
    </footer>
  );
}
