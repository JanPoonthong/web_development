use('mongodbVSCodePlaygroundDB');

// db.sales.find({
//     item: "abc"
// })

// db.getCollection('sales').aggregate([
//     { $match: { item: "abc"}},
//     { $group: { _id: '$item', totalSaleAmount: { $sum: { $multiply: [ '$price', '$quantity' ] } } } }
// ]);

db.sales.updateMany(
    { item: "abc" },
    {
      $set: { item: "xyz" }
    }
  )

// db.sales.deleteMany( { item: "xyz" } )