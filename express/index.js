const { route } = require('./route/route.js')
const port = 3000





route.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
