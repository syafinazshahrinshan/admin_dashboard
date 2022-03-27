const express = require('express')
const app = express()

// const cors = require('cors')
// app.use(
//     cors({
//         origin:"*",
//         methods:['GET','POST']
//     })
// )
app.listen(3000,()=>{
    console.log("server is listening on port 3000")
})