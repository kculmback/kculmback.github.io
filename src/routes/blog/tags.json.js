import posts from "./_posts.js";

const contents = JSON.stringify(
  Array.from(
    new Set(
      posts.reduce(
        (accumulator, current) => [...accumulator, ...current.tags],
        []
      )
    )
  )
);

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(contents);
}
