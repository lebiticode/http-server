const express = require('express');
const app = express();

let firstRequest = true;

app.post('/', (req, res) => {
  if (firstRequest) {
    firstRequest = false;
    setTimeout(() => {
      res.status(504).send('Gateway Timeout'); 
    }, 5000); // Simula un timeout de 5 segundos
  } else {
    res.send('OK');
  }
});

const port = 3000; // Puedes cambiar el puerto si lo deseas
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
