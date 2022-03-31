// const { default: axios } = require("axios")


const app = Vue.createApp({
    mounted(){
        fetch('/inventory/getAll')
        .then(res=> res.json())
        .then(data => this.inventory = data)
        .catch(err => console.log(err.message))

    },

    data(){
        return{
            inventory:[]      
        }
    }
})

app.component('product-card',{
    props:['product'],

    methods:{
        DeleteProduct(ele){

            var element=JSON.parse(JSON.stringify(ele))
            var itemID=element.product.itemid
            console.log(itemID)
            var config = {
                method: 'DELETE',
                url: '/inventory/${itemID}',
                headers: { 
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                },
                
            };

            axios.delete('/inventory/' + itemID)
            .then(function (response) {
                console.log("Product Deleted!");
            })
            .catch(function (error) {
                console.log(error);
            });
        }

    },
    template: `
                    <div class="card mb-3">
                    
                        <div class="card-header bg-light">
                            <div class="row">
                                <div class="col-4">
                                    <div class='d-flex flex-row'>
                                        <div class='w-25'>
                                            <h6 class="text-black">Name</h6>
                                        </div>
                                        <div>
                                            {{product.name}}
                                        </div>
                                    </div>
                                </div>
                            
                                
                    
                                <div class="col-6">
                                    <div class='d-flex flex-row'>
                                        <div class='w-25'>
                                            <h6 class="text-black">Creation Date Time</h6> 
                                        </div>
                                        <div>
                                            {{product.createdat}}
                                        </div>
                                    </div>
                                </div>

                                <div class="col-2">
                                    <div class='d-flex flex-row'>
                                        <div class='w-50'>
                                            <button type='button' class='btn'>Edit
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                                </svg>
                                            </button>
                                        </div>
                                        <div>
                                            <button type='button' class='btn' v-on:click="DeleteProduct(this)">Delete
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    
                    
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <th>Product ID</th>
                                <th>Quantity</th>
                                <th>Available?</th>
                                <th>Price Per Item</th>
                                <th class='w-50'>Image URL</th>
                            </thead>
                            <tr>
                                <td>{{product.itemid}}</td>
                                <td>{{product.quantity}}</td>
                                <td>{{product.isavailable}}</td>
                                <td>{{product.priceperitem}}</td>
                                <td>{{product.url}}</td>
                            </tr>
                        </table>
                    </div>
                </div>
                
        `
})
app.mount('#app')