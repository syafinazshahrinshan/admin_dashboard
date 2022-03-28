const express = require('express')
const app = express()
app.use(express.json()) // -> req.body

const req = require('request');
const INVENTORY_URL = process.env.INVENTORY_URL||"http://5.161.50.89:7322"
const path = require('path');
//const request = require('express/lib/request');

app.get('/addProduct', function(request, response){
    response.sendFile(path.join(__dirname, '/add_product.html'));
});

app.get('/inventory/getAll', function(request, response){
    var options = {
        'method': 'GET',
        'url': INVENTORY_URL+'/inventory/getAll',
    };
    req(options, function (error, res) {
        if (error) {
            throw new Error(error)
        }
        let result = JSON.parse(res.body)
        console.log(result)
        response.json(result);
    });      
});

app.post('/inventory/create', function(request, response){
    var options = {
        'method': 'POST',
        'url': INVENTORY_URL+'/inventory/create',
        headers : {
            "content-type": "application/json",
        },
        json: true ,
        body: request.body
    };
    req(options, function (error, res) {
        if (error) {
            throw new Error(error)
        }
        console.log(response.body);    
        response.json();
    });      

});


app.get('/', function(request, response){
    response.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(3050,()=>{
    console.log("server is listening on port 3050")
})