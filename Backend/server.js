const express = require("express")
const app = express()
const db = require("./config/db")

app.use(express.json())

// ...routes imports...
// ...routes usage...

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
