const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const routes = require('./routers');

app.use(cors());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '../', 'public')));

routes(app);
// app.get('/', (req, res) => {
//   res.send('Are you listening');
// });
app.listen(4040, () => {
  console.log('listening port on 4040');
});
