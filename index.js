const http = require("http")
const fs = require("fs")
const { error } = require("console")

// Create Server
const server = http.createServer((req,res)=>{
    console.log(req.url)
    if(req.url=='/photo'){
        res.writeHead(200,{"me":"Suhaani"})
        fs.readFile("images.jpeg",(error,data)=>{
        res.end(data)
    })
    }else if(req.url==="/website"){
        fs.readFile("index.html",(error,data)=>
            {res.end(data)

            })
        
    }
    else{
        res.end("Page not found")
    }
    

})
server.listen(3000,()=>{
    console.log("My server is ruuning on http://localhost:3000/ port")
})

//  npx kill-port 3000 after every new edition!