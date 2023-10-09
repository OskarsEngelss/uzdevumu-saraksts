import "./App.css";

function App() {
  const uzdevumi = [
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "userId": 1,
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    },
    {
      "userId": 1,
      "id": 6,
      "title": "qui ullam ratione quibusdam voluptatem quia omnis",
      "completed": false
    }
  ];

  const uzdevumiJSX = uzdevumi.map((uzdevums, indekss) => {
    return (
        <div class="uzdevumaDiv">
          <h2>{uzdevums.title}</h2>
          <p>ID: {uzdevums.id}</p>
          <label>Izpildīts: </label>
          <input type="checkbox" checked={uzdevums.completed} />
        </div>
    )
  });

  return (
    <>
      {uzdevumiJSX}
    </>
  )
}

export default App;
