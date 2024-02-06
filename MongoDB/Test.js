//1.
// use ecommerce

//  2 Or 3.

// CUSTOMERS:-
db.customers.insertMany([
    {
        "customer_id": '0001',
        "first_name": "harsh",
        "last_name": "chavada",
        "email": "harshtest@gmail",
        "password": 123456
    },
    {
        "customer_id": '0002',
        "first_name": "ansh",
        "last_name": "kathiriya",
        "email": "harshtest@gmail",
        "password": 123456
    },
    {
        "customer_id": '0001',
        "first_name": "harsh",
        "last_name": "chavada",
        "email": "harshtest@gmail",
        "password": 123456
    },
    {
        "customer_id": '0001',
        "first_name": "harsh",
        "last_name": "chavada",
        "email": "harshtest@gmail",
        "password": 123456
    },
    {
        "customer_id": '0001',
        "first_name": "harsh",
        "last_name": "chavada",
        "email": "harshtest@gmail",
        "password": 123456
    },
    ])
    
    // PRODUCTS:-
    db.products.insertMany([
        {
            "product_id":'001',
            "product_name": "pent",
            "product_description": "jeans pent",
            "product_price": 800,
            "product_quntity": 1,
            "category": "manswear"
        },
        {
            "product_id":'002',
            "product_name": "shirt",
            "product_description": "cottan wear",
            "product_price": 600,
            "product_quntity": 1,
            "category": "manswear"
        },
        {
            "product_id":'003',
            "product_name": "t-shirt",
            "product_description": "cotton wear",
            "product_price": 400,
            "product_quntity": 1,
            "category": "manswear"
        },
        ])
   
// ORDERS:-
db.orders.insertMany([
    {
        opred_id: "O0001",
        customer_id: "a0001",
        oredr_date: "2024-01-14",
        total_price: "1200"
    },
    {
        opred_id: "O0002",
        customer_id: "a0002",
        oredr_date: "2024-01-24",
        total_price: "1500"
    },
    {
        opred_id: "O0003",
        customer_id: "a0004",
        oredr_date: "2024-02-01",
        total_price: "1100"
    },
    {
        opred_id: "O0004",
        customer_id: "a0005",
        oredr_date: "2024-01-07",
        total_price: "1200"
    }
    
    ])

// ORDER_ITEMS:-
db.order_items.insertMany([
    {
        order_item_id: "OT0001",
        order_id: "O0003",
        product_id: "p0001",
        quantity: "2",
        price: "2000"
    },
    {
        order_item_id: "OT0002",
        order_id: "O0001",
        product_id: "p0002",
        quantity: "3",
        price: "2500"
    },
    {
        order_item_id: "OT0003",
        order_id: "O0003",
        product_id: "p0002",
        quantity: "1",
        price: "800"
    },
    {
        order_item_id: "OT0004",
        order_id: "O0004",
        product_id: "p0004",
        quantity: "2",
        price: "1500"
    }
    ])

//4.
 db.customer.find()

// 5.
db.products.find()

// 6.
db.orders.find()

// 7. 
 db.order_items.find()


// db.order_items.aggregate([{
//       $lookup: {
//              from: "products",
//              localField: "product_id",
//              foreignField: "product_id",
//              as: "Details"
//           }
//  }, 
//  {
//      $lookup: {
//             from: "orders",
//             localField: "order_id",
//             foreignField: "order_id",
//             as: "Orderrs"
//           }
//  },
//   {
//       $lookup: {
//               from: "customers",
//               localField: "Orderrs.Customer_id",
//               foreignField: "customer_id",
//               as: "Customer"
//             }
//   },
//   {
//       $project: {
//                   "order_item_id" : 1 ,
//                   "order_id": 1 ,
//                   "product_id": 1,
//                   "quantity" :1,
//                   "price" : 1,
//                   "Details.Product_name" :1,
//                   "Customer.first_name" : 1 ,
//                   "Customer.email" : 1
                  
//       }
//   }
//  ])

// 8. 
db.orders.aggregate([
    {
        $lookup:{from:"customers",
             localField:"customer_id",
             foreignField:"customer_id",
             as:"Info"
}
},
{
    $lookup:{from:"products",
         localField:"product_id",
         foreignField:"product_id",
         as:"Info"
}
},
    {$project:{_id:0,
               order_id:1,
               oredr_date:1,
               total_price:1,
      customers:{customer_id:1,
                first_name:1,
                last_name:1,
                email:1
    },
      products:{
        product_id:1,
        product_name:1,
        product_description:1,
        product_price:1
      }       
    }}
])

// 9. 
db.products.updateOne({product_id:'002'},{$set:{product_quantity:5}})

// 10.
db.orders.aggregate([{$lookup: {
      from: "customers",
      localField: "customer_id",
      foreignField: "customer_id",
      as: "info"
     }}, {$project:{_id:0,order_id:1,order_date:1,total_price:1,customer:{customer_id:1, first_name:1, last_name: 1,email:1}}}])
    
// 11.
db.products.aggregate([{$match:{category:"manswear"}},{$sort:{product_price:400}}])


//12.
db.orders.deleteOne({order_id:'0003'})
   



  
 