const express = require('express');
const app = express();
const chalk = require('chalk');

const users =  [
  { id: 1, name: 'User 1'},
  { id: 2, name: 'User 2'},
  { id: 3, name: 'User 3'},
  { id: 4, name: 'User 4'},
  { id: 5, name: 'User 5'},
  { id: 6, name: 'User 6'},
  { id: 7, name: 'User 7'},
  { id: 8, name: 'User 8'},
  { id: 9, name: 'User 9'},
  { id: 10, name: 'User 10'},
  { id: 11, name: 'User 11'},
  { id: 12, name: 'User 12'},
]


// app.get('/users', (req, res) => {
//   res.send(users)
// })

// paginate api results 
app.get('/users', paginatedResults(users), (req, res) => {
  res.json(res.paginatedResults)
})


function paginatedResults(model) {
  return (req, res, next) => {
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)
  
    // num of pages * amount per page, limit ==> gets the different fromt start and end of that page 
    const startIndex = (page -1) * limit
    const endIndex = page * limit 
  
    const results = {}
  
    if (endIndex < model.length) {
      results.next = {
        page: page + 1,
        limit: limit
      }
    }
      
    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit
      }
    }
    
    console.log(chalk.yellow(startIndex, endIndex))

    results.results = model.slice(startIndex, endIndex)
    // save to response 
    res.paginatedResults = results 
    next()
  }
}


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listing on port ${port}`));
