const express = require('express')
const app = express()
app.use(express.json()) // -> req.body
 
const INVENTORY_URL = process.env.INVENTORY_URL||"http://5.161.50.89:7322"
const ORDER_URL = process.env.INVENTORY_URL||"http://5.161.50.89:7323"
const path = require('path');

//const request = require('express/lib/request');
var req = require("request");

// file path for ADD PRODUCT
app.get('/addProduct', function(request, response){
    response.sendFile(path.join(__dirname, '/add_product.html'));
});

// file path for INVENTORY INDEX
app.get('/Inventory', function(request, response){
    response.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/InventoryJS', function(request, response){
    response.sendFile(path.join(__dirname, '/inventory.js'));
});

//file path for ORDER
app.get('/Order', function(request, response){
    response.sendFile(path.join(__dirname, '/order.html'));
});

//file path for ORDER DETAILS
app.get('/OrderJS', function(request, response){
    response.sendFile(path.join(__dirname, '/order.js'));
})

//file path for ADD ORDER 
app.get('/AddOrder', function(request, response){
    response.sendFile(path.join(__dirname, '/add_order.html'));
});

app.get('/AddOrderJS', function(request, response){
    response.sendFile(path.join(__dirname, '/add_order.js'));
});

//file path for ORDER CARD 
app.get('/OrderCard', function(request, response){
    response.sendFile(path.join(__dirname, '/order_card.html'));
});



//INVENTORY
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

app.delete('/inventory/:itemID', function(request, response){
    var options = {
        'method': 'DELETE',
        'url': INVENTORY_URL+'/inventory/:itemID',
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


//ORDER
app.get('/order/getAll', function(request, response){
    var options = {
        'method': 'GET',
        'url': ORDER_URL+'/order/getAll',
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


app.post('/order/create', function(request, response){
    var options = {
        'method': 'POST',
        'url': ORDER_URL+'/order/create',
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

app.listen(3000,()=>{
    console.log("server is listening on port 3050")
})