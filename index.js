
const express = require('express')
var cors = require('cors')

const app = express()
const port = process.env.PORT || 3000

app.use(cors())

app.use(express.static('./'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})