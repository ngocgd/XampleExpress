var express = require('express');
var path = require('path')

const hbs = require('express-handlebars');
const { dirname } = require('path');
const app = express();

app.use(express.static(path.join(__dirname,'public')));

app.engine('hbs',hbs.engine({
  extname : '.hbs'
}));
app.set('view engine','hbs');
app.set('views',path.join(__dirname,'resources\\views'))

app.get('/',(req,res)=>{
  res.render('home');
})
app.get('/new',(req,res)=>{
  res.render('new');
})
app.listen(3000,() =>console.log('Server on port 3000'))
 