"use client";

import * as React from "react";

export function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <p>
      Count is: {count}
      <br />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount((c) => c + 1)}
      >
        Increment
      </button>
    </p>
  );
}
