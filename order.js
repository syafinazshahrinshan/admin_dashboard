
    const app = Vue.createApp({
        computed: {
        }
        ,

        mounted(){
            fetch("/order/getAll")
            .then(res=> res.json())
            .then(data => this.orders = data)
            .catch(err => console.log(err.message))
        },

        data(){
            return{
                orders:[],
                orderID: '',
                
            }
        },

        methods:{
            // orderDetails(){
            // Router.push({
            //     name:'/OrderDetails',
            //     params:{
            //         orderDetailsID: this.orderID
            //     }

            //     })
            // }
        },

    })

    app.component('order-card',{
        props:['order'],
        template: `
                    <div class="card mb-2">
                    
                    <div class="card-header bg-light">
                        <div class="row">
                            <div class="col-5">
                                <div class='d-flex flex-row'>
                                    <div class='w-25'>
                                        <h5 class="text-black">Order ID</h5> 
                                    </div>
                                    <div>
                                        {{order.orderid}}
                                    </div>
                                </div>
                            </div>

                            <div class="col-5">
                                <div class='d-flex flex-row'>
                                    <div class='w-25'>
                                        <h5 class="text-black">Creation Date Time</h5>
                                    </div>
                                    <div>
                                        {{order.createdat}}
                                    </div>
                                </div>
                                
                            </div>

                            <div class="col-2">
                                    <div class='d-flex flex-row'>
                                        <div class='w-50'>
                                            <p>Edit
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                                </svg>
                                            </p>
                                        </div>
                                        <div>
                                            <p>Delete
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                                                </svg>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                        </div>
                    </div>

                    <div class="card-body">
                        <table class="table">
                            <thead class="table">
                                <th>User ID</th>
                                <th>Order Status</th>
                                <th>Order Details</th>
                            </thead>
                            <tr>
                                <td>{{order.user_id}}</td>
                                <td>{{order.orderstatus}}</td>
                                <td><a href="/OrderDetails/" id="orderid">Click here to view more</a></td>
                            </tr>
                        </table>
                    </div>
                </div>
        `
    })

app.mount('#app')
