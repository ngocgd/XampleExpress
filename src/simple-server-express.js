var express = require('express');
var path = require('path');
const hbs = require('express-handlebars');
const { dirname } = require('path');
const app = express();
const rout = require('./routes');
const db = require('./config/db')
//Connect to db
db.connect();


app.use(express.static(path.join(__dirname, 'public')));
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

app.engine(
  'hbs',
  hbs.engine({
    extname: '.hbs',
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

//routes init
rout(app);

app.listen(3000, () => console.log('Server on port 3000'));
