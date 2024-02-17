const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))


// app.get or app.post or app.put or app.delete.(path, handler)
app.get('/', (req, res) => {
  res.send('hello world 34')
})

app.get('/about', (req, res) => {
  res.send('hello about')
})

app.get('/contact', (req, res) => {
  res.send('hello contact')
})

app.get('/blog', (req, res) => {
  res.send('hello blog')
})

app.get('/blog/:slug', (req, res) => {
    // logic to fetch {slug} from the db
    console.log(req.params)
    console.log(req.query)
  res.send(`Blog name ${req.params.slug}`)
})

// app.get('/blog/intro-to-js', (req, res) => {
//   res.send('hello blog intro-to-js')
// })

// app.get('/blog/intro-to-python', (req, res) => {
//   res.send('hello blog intro-to-python')
// })

app.listen(port, () =>{
    console.log(`Example app listening on ${port}`)
})