
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
                        <div class="col-6">
                            <h5 class="text-black">Order ID</h5> {{order.orderid}}
                        </div>

                        <div class="col-6">
                            <h5 class="text-black">Creation Date Time</h5> {{order.createdat}}
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
