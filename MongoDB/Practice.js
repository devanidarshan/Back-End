// use node_6pm

// show dbs

// show collections

// db.createCollection("student")

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

db.createCollection("user");

db.user.insertMany([
  {
    name:"Hello",
    age:25,
    email:"hello@test.in",
    faculty:"Vivek"
  },
  {
    name:"Darshan Devani",
    age:23,
    email:"darshan@test.in",
    hobbie:["Travelling","Music"],
    faculty:"Kuldeep"
  },
  {
    name:"Rutvik Savaliya",
    email:"rutu@test.in",
    gender:"male",
    hobbie:["Travelling","Music","Gaming"],
    faculty:"Kuldeep",
    address:{
      line:"208 city center",
      city:"Surat",
      state:"Gujarat",
      country:"India"
    }
  },
  {
    name:"Harsh Chavda",
    age:19,
    course:"Backend developer",
    faculty:"Girish",
    address:{
      line:"209 city center",
      city:"surat",
      state:"Gujarat",
      country:"India"
    }
  },
  {
    name:"Akshay Gajera",
    age:25,
    gender:"male",
    course:"Backend Developer",
    hobbie:["Tarvelling","Reading","Cricket"],
    faculty:"Nikunj"
  },
]);

db.user.find()
db.user.find({gender: "male"})
db.user.findOne({gender: "male"})
db.user.updateOne({gender: "male"}, {$set: {gender:"male", course:"node.js Developer"}}, {upsert:true})  // Update Only One
db.user.updateOne({}, {$set: {gender:"male", course:"node js Developer"}}, {upsert:true})                // Update All
db.user.deleteOne({age:20})
db.user.deleteMany({gender:"Male"})
db.user.drop()
db.dropDatabase()

db.createCollection("teacher");

db.teacher.insertMany([
  {
    name:"Girish",
    course:"Backend Developer",
    email:"girish@test.in"
  },
  {
    name:"Vivek",
    course:"Frontend Developer",
    email:"vivek@test.in"
  },
  {
    name:"Kuldeep",
    course:"Flutter Developer",
    email:"kuldeep@test.in"
  },
  {
    name:"Nikunj",
    course:"UI / UX Design",
    email:"nikunj@test.in"
  },
]);

db.teacher.find()



