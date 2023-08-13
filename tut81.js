// Inserting data in mongo db
// use luckyKart
db.items.insertOne({
    name:"Samsung 30s", price:22000, rating: 4.5, qty:223, sold:98
})
db.items.insertMany([{name:"Samsung 30s", price:22000, rating: 4.5, qty:223, sold:98},{name:"Moto 30s", price:29000, rating: 3.5, qty:123, sold:298},{
name:"Realme 80s", price:129000, rating: 2.5, qty:623, sold:98, isBig: true}])