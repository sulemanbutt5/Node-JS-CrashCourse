const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

// express app
const app = express();

// connect to mongodb & listen for requests
const dbURI = 'mongodb+srv://forblogs:test1234@node-tuts.owfqp.mongodb.net/node-tuts?retryWrites=true&w=majority';

mongoose.connect(dbURI, {useNewUrlParser:true,useUnifiedTopology:true})
  .then(result => app.listen(3000))
  .catch(err => console.log(err));

// register view engine
app.set('view engine', 'ejs');


// middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// mongoose & mongo tests
app.get('/add-blog', (req, res) => {
  const blog = new Blog({
    title: 'Suleman\'s blog',
    snippet: 'This is written by Suleman',
    body: 'Dolore cupidatat elit labore laborum. Elit ex adipisicing fugiat dolor do pariatur voluptate aute dolor occaecat do tempor occaecat. Sunt eiusmod officia duis nostrud occaecat.Ullamco culpa consequat minim aliquip. Nostrud Lorem sint sint consequat nostrud eiusmod anim laboris ea nisi elit ipsum adipisicing. Fugiat eiusmod aute velit dolor occaecat cupidatat nulla eiusmod consectetur ut duis non adipisicing. Deserunt enim eu aliqua ullamco nostrud eu magna et velit laborum fugiat. Dolore Lorem reprehenderit officia aliqua magna.'
  })

  blog.save()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get('/all-blogs', (req, res) => {
  Blog.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get('/single-blog', (req, res) => {
  Blog.findById('5f66300696a7903ef43476a2')
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// blog routes
app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

app.get('/blogs', (req, res) => {
  Blog.find().sort({ createdAt: -1 })
    .then(result => {
      res.render('index', { blogs: result, title: 'All blogs' });
    })
    .catch(err => {
      console.log(err);
    });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});