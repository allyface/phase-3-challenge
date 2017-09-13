const express = require('express')
const app = express()

const daysOfWeek = {monday: 1, tuesday:2, wednesday: 3, thursday: 4, friday: 5, saturday: 6, sunday: 7}

app.get('/api/days/:day', (req, res) => {
  daysOfWeek.hasOwnProperty(req.params.day) ?
    res.send(`<p>request: GET ${req.url}</p>
      <p>response: ${daysOfWeek[req.params.day]}</p>
      <p>status: 200</p>`) :
    res.send(`<p>request: GET ${req.url}</p>
      <p>response: '${req.params.day}' is not a valid day!</p>
      <p>status: 400</p>`)
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
