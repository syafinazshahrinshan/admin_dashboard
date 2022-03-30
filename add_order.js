const app = Vue.createApp({
    data(){

        return{
            data:{
                userid: '',
                orderstatus: '',
                details: [{
                    productid:'',
                    quantity: '',
                    price:''
                }],
            }

        }
    },

    methods:
        {
    
        addOrder(){

        var data = JSON.stringify({
            "userid": this.data.userid,
            "orderstatus": this.data.orderstatus,
            "details": this.data.details,
            
        });

        var config = {
            method: 'post',
            url: '/order/create',
            headers: { 
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                },
                data : data
            };

            axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
        },

        addProductFields(){
            
            let template =  `
            <div class='card mb-3'>
                <div class='card-header'>
                Item 

                <span onclick='return this.parentNode.parentNode.remove()' class=''> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                    </svg></span>
                </div>
                
            
        
            <div class='card-body'>
                <div class='row'>
                    <div class='col'>
                        <label for="productID" class="col-form-label">Product ID</label>
                        <input  type="number" id="productID" class="form-control" >
                    </div>
        
                    <div class='col'>
                        <label for="productQuantity" class="col-form-label">Product Quantity</label>
                        <input  type="number" id="productQuantity" class="form-control" >
                    </div>
        
                </div>
        
                <div class='row'>
                    <div class='col-6'>
                        <label for="productPrice" class="col-form-label">Product Price Per Item</label>
                        <input  type="number" id="productPrice" class="form-control" >
                    </div>
                </div>
            </div>
            </div>
            `
            document.getElementById('productFields').innerHTML+=(template)
            console.log(document.getElementById('productFields'))
        }
    }
})

app.component('order-details',{
    name:'order-details',
    template:
    `
    <div class='card mb-3'>
        <div class='card-header'>
        Item 

        <span onclick='return this.parentNode.parentNode.remove()'> 
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
        </svg></span>
        </div>
    

    <div class='card-body'>
        <div class='row'>
            <div class='col'>
                <label for="productID" class="col-form-label">Product ID</label>
                <input  type="number" id="productID" class="form-control" >
            </div>

            <div class='col'>
                <label for="productQuantity" class="col-form-label">Product Quantity</label>
                <input  type="number" id="productQuantity" class="form-control" >
            </div>

        </div>

        <div class='row'>
            <div class='col-6'>
                <label for="productPrice" class="col-form-label">Product Price Per Item</label>
                <input  type="number" id="productPrice" class="form-control" >
            </div>
        </div>
    </div>
    </div>
    `
})


app.mount('#app')