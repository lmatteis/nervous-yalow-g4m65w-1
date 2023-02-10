const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchAsyncStuff() {
  await sleep(5000);
  return {
    name: "Async Stuff",
    description: "just some fetched things",
  };
}

export async function SomeAsyncStuff() {
  const data = await fetchAsyncStuff();

  return (
    <>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
    </>
  );
}
