// use node_6pm

// show dbs

// show collections

// db.createCollection("user")

db.student.insertOne({
  name: "John",
  age: 15,
});

db.student.insertMany([
  {
    name: "Allen",
    age: 10,
  },
  {
    name: "Adam",
    age: 20,
  },
  {
    name: "Sara",
    age: 25,
  },
  {
    name: "Julia",
    age: 22,
  },
  {
    name: "Mark",
    age: 55,
  }
]);

// db.student.find()


