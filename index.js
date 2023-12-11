const express = require('express')
const cors = require('cors')
const path = require('path');
const app = express()
const port = process.env.PORT || 5009
// import pdf from "/Sajjad_Resume.pdf"

// middleware
app.use(cors(
   
));
app.use(express());


app.get('/', (req, res) => {
    const pdfFilePath = path.join(__dirname, 'Sajjad_Resume.pdf');
  res.download(pdfFilePath)

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



