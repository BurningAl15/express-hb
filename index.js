const express = require('express');

const app = express();
const port = 3000;

// Static Server
app.use(express.static('public'))

// app.get('/', (req, res) => { 
//   res.send('Home!');
// });
app.get('/generic', (req, res) => { 
  res.sendFile('/public/generic.html', { root: __dirname });
});

app.get('/elements', (req, res) => { 
  res.sendFile('/public/elements.html', { root: __dirname });
});

app.get('/another', (req, res) => {
  res.send('Another Route!');
});

app.get('*', (req, res) => {
  res.send('Any other!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
