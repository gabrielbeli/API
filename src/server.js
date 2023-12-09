const express = require("express");

const app = express();

app.post("/users", (request, response) => {

  response.send(`Você chamou o POST`);
});

app.get("/users", (request, response) => {
  const { page, limit } = request.query;

  response.send(`
  Página: ${page}. 
  Mostrar: ${limit}.
  `);
});

const PORT = 3333;

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));