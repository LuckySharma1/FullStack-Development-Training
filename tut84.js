// show dbs 
// use  luckyKart
// show collections

// updation in Mongo DataBase
db.items.find()
db.items.updateOne({name: "Moto 30s"},{$set: {price: 200}})

db.items.find()
db.items.updateMany({name: "Moto 30s"},{$set: {price: 20, rating: 1}})