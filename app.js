const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.set ('view engine', 'ejs')

app.listen(port, () => {
    console.log("workin")
})

app.set('view-engine', 'ejs')

// Routes
app.get('/', (req, res) => {
    res.render('pages/home')
})
app.get('/login', (req, res) => {
    res.render('pages/login')
})
app.get('/profile', (req, res) => {
    res.render('pages/profile')
})
app.get('/register', (req, res) => {
    res.render('pages/register')
})
app.get('/user', (req, res) => {
    res.render('pages/user')
})

app.use(express.static(path.join(__dirname,'public')))