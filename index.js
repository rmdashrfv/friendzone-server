import express from 'express'
import cors from 'cors'

const FRIENDS = [
  {id: 1, name: 'Sam Samson', email: 'sam@example.com'},
  {id: 2, name: 'Julia Juleson', email: 'julia@example.com'},
  {id: 3, name: 'Son Sonson', email: 'son@example.com'}
]

const PENDING_REQUESTS = [
  {from: 1, senderName: 'Sam Samson'},
  {from: 3, senderName: 'Son Sonson'}
]

const app = express()
app.use(cors())

// Think of app.get as a way of attaching addEventListener to your browser's address bar
app.get('/', (req, res) => {
  res.json({message: 'You successfully created your own server'})
})

// I want to type localhost:3001/friends and get a list of the friends in the array above
app.get('/friends', (req, res) => {
  res.json(FRIENDS)
})

// I want to type localhost:3001/friend_requests and see the pending requests
app.get('/friend_requests', (req, res) => {
  res.json(PENDING_REQUESTS)
})

app.listen(3001, () => {
  console.log('Friendzone server is running on PORT 3001')
})

