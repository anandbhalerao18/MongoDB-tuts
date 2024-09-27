use("CrudDb")
// CRUD OPRATIONS

db.createCollection("courses")


db.courses.insertOne({
    name: "anand web dev free course",
    price: 0,
    assignment : 12,
    projects : 45
})


// db.courses.insertMany([
//     {
//       "name": "Web Development Bootcamp",
//       "price": 9999,
//       "assignments": 15,
//       "projects": 20
//     },
//     {
//       "name": "Full Stack Web Development Course",
//       "price": 12999,
//       "assignments": 20,
//       "projects": 30
//     },
//     {
//       "name": "React JS Mastery Course",
//       "price": 7999,
//       "assignments": 10,
//       "projects": 15
//     },
//     {
//       "name": "Node.js and Express.js Course",
//       "price": 5999,
//       "assignments": 8,
//       "projects": 12
//     },
//     {
//       "name": "MERN Stack Development Course",
//       "price": 14999,
//       "assignments": 25,
//       "projects": 40
//     },
//     {
//       "name": "Python Web Development Course",
//       "price": 6999,
//       "assignments": 12,
//       "projects": 18
//     },
//     {
//       "name": "Angular Development Course",
//       "price": 8999,
//       "assignments": 15,
//       "projects": 22
//     },
//     {
//       "name": "Vue.js Development Course",
//       "price": 7499,
//       "assignments": 10,
//       "projects": 16
//     },
//     {
//       "name": "Database Management Course",
//       "price": 4999,
//       "assignments": 8,
//       "projects": 10
//     },
//     {
//       "name": "Frontend Development Course",
//       "price": 5999,
//       "assignments": 10,
//       "projects": 15
//     }
//   ])


// let a = db.courses.find({price:0})
// console.log(a.count())

// let a = db.courses.find({price:0})
// console.log(a)

// let b = db.courses.findOne({price:0})
// console.log(b)










// update
db.courses.updateOne({price: 0}, {$set:{price:100}})

db.courses.updateMany({price: 0}, {$set:{price:10000}})

//Delete

db.courses.deleteOne({price:1000})

db.courses.deleteMany({price:1000})






