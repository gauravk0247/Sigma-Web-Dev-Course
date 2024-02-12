use('CrudDb');
// console.log(db);

// create 
// db.createCollection("courses");


// insert
// db.courses.insertOne({
//     "name": "Web dev",
//     "price": 0,
//     "assignments": 22,
//     "projects": 45
// })

db.courses.insertMany([
    {
      "name": "Web dev",
      "price": 0,
      "assignments": 22,
      "projects": 45
    },
    {
      "name": "Mobile App Development",
      "price": 0,
      "assignments": 20,
      "projects": 40
    },
    {
      "name": "Data Science",
      "price": 0,
      "assignments": 25,
      "projects": 50
    },
    {
      "name": "Machine Learning",
      "price": 0,
      "assignments": 30,
      "projects": 55
    },
    {
      "name": "Artificial Intelligence",
      "price": 0,
      "assignments": 28,
      "projects": 52
    },
    {
      "name": "Cybersecurity",
      "price": 0,
      "assignments": 24,
      "projects": 48
    },
    {
      "name": "Game Development",
      "price": 0,
      "assignments": 26,
      "projects": 44
    },
    {
      "name": "Blockchain",
      "price": 0,
      "assignments": 27,
      "projects": 51
    },
    {
      "name": "Cloud Computing",
      "price": 0,
      "assignments": 23,
      "projects": 47
    },
    {
      "name": "UI/UX Design",
      "price": 0,
      "assignments": 21,
      "projects": 46
    }
  ]
  )

  // Read Operation
  // find all data in mongodb
//   let a = db.courses.find({price: 0});
//   console.log(a)

// find one in records
let b = db.courses.findOne({projects: 46})
// console.log(b)

//   console.log(a.count())  count the cusrosr 

// console.log(a.toArray())


// update

// update one record
// db.courses.updateOne({price: 0}, {$set:{price: 100}})

// update many records
// db.courses.updateMany({price: 0}, {$set:{price: 300}})

//Delete
// db.courses.deleteOne({price: 100})

// delete many records
db.courses.deleteMany({price: 300})