import * as React from "react";
import { Counter } from "./Counter";
import { SomeAsyncStuff } from "./SomeAsyncStuff";

export default async function Home() {
  return (
    <main>
      <Counter />
      <hr />
      <React.Suspense fallback={<p>...</p>}>
        <SomeAsyncStuff />
      </React.Suspense>
    </main>
  );
}
