var express = require('express');
var path = require('path');
const hbs = require('express-handlebars');
const { dirname } = require('path');

const rout = require('./routes');
const db = require('./config/db')

const app = express();

// const courses = require('./app/models/course')
// const { mutipleMongooseToObject } = require('./util/mongoose')

//Connect to db
db.connect();

app.use(express.static(__dirname + '/public'));
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
    helpers:{
      sum : (a,b) => a+b,
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
