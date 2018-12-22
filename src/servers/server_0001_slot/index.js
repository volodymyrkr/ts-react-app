const express = require('express');
const app = express();

const spinCount = 20;

random = (maxValue) => {
  return Math.round(Math.random()*maxValue)
};

app.use((request, response, next) => {
  console.log(request.headers);
  next()
});

app.use((request, response, next) => {
  request.chance = Math.random();
  request.freespin = [
    [random(spinCount), random(spinCount), random(spinCount)],
    [random(spinCount), random(spinCount), random(spinCount)],
    [random(spinCount), random(spinCount), random(spinCount)],
    [random(spinCount), random(spinCount), random(spinCount)],
    [random(spinCount), random(spinCount), random(spinCount)]
  ];
  next()
});

app.get('/chance', (request, response) => {
  response.json({
    chance: request.chance
  })
});

app.get('/freespin', (request, response) => {
  response.json({
    "game": "slot",
    "result": request.freespin
  })
});

app.listen(3333);