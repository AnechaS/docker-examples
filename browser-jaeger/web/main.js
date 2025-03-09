import "./instrumentation";

document.getElementById("fetchButton").addEventListener("click", async () => {
  await fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((data) => console.log(data));

  throw new Error("Some error");
});

console.log("Hi");
