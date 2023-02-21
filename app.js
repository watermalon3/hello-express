const { request, response } = require("express");
const express = require("express");
const app = express();

app.listen(4000, () => {
  console.log(`[server]: listening on 4000`);
});

app.get(`/home`, (request, response) => {
  response.send("<h1> Hello, example!</h1>");
});

app.get(`/name`, (request, response) => {
  response.send(`My name is Alex`);
});

app.get(`/friend`, (request, response) => {
  response.send(`My friend is Tyler`);
});

app.get(`/:page`, (request, response) => {
  console.log(request.params);
  let page = request.params.page;
  response.send(`you are on the ${page} page and potato`);
});
