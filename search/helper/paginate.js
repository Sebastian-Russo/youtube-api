/******************** PAGINATE RESULTS *********************/
// function paginatedResults(model) {
//   return (req, res, next) => {
//     const page = parseInt(req.query.page)
//     const limit = parseInt(req.query.limit)
  
//     // num of pages * amount per page, limit ==> gets the different fromt start and end of that page 
//     const startIndex = (page -1) * limit
//     const endIndex = page * limit 
  
//     const results = {}
  
//     if (endIndex < model.length) {
//       results.next = {
//         page: page + 1,
//         limit: limit
//       }
//     }
      
//     if (startIndex > 0) {
//       results.previous = {
//         page: page - 1,
//         limit: limit
//       }
//     }
  
//     results.results = model.slice(startIndex, endIndex)
//     // save to response 
//     res.paginatedResults = results 
//     next()
//   }
// }