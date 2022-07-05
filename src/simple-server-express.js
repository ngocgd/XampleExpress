var express = require('express');
var path = require('path');
const hbs = require('express-handlebars');
const { dirname } = require('path');
const cookieParser = require('cookie-parser');
const rout = require('./routes');
const db = require('./config/db');
const sortMiddleWare = require('./app/middleware/SortMiddleWare');
require('./connection-redis')


const app = express();

// const courses = require('./app/models/course')
// const { mutipleMongooseToObject } = require('./util/mongoose')

//Connect to db
db.connect();

// App.use : Middleware
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());
//Custom middleware for sort
app.use(sortMiddleWare);

app.engine(
  'hbs',
  hbs.engine({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
      sortable: (field, sort) => {
        const sortType = field === sort.column ? sort.type :' default';

        const icons = {
          default: 'oi oi-elevator',
          asc: 'oi oi-sort-ascending',
          desc: 'oi oi-sort-descending'
        };
        const types = {
          default : 'desc',
          asc :  'desc',
          desc : 'asc'
        }
        const type = types[sortType]; 
        const icon = icons[sort.type];
        return `<a href="?_sort&column=${field}&type=${type}">
          <spam class="${icon}"></spam>
        </a>`
      }

    }
  }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// app.use('/newss',(req,res,next)=>{
//   courses.find({})
//   .then(courses =>{
//     res.render('home',{
//       courses : mutipleMongooseToObject(courses)
//     });
//   })
// })

//routes init
rout(app);

app.listen(3000, () => console.log('Server on port 3000'));
