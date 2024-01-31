// db.Book.find()
// db.Book.find({"author": {$eq:"Kyle Simpson"}})
// db.Book.find({"author": {$ne:"Kyle Simpson"}})
// db.Book.find({"pages": {$gt:600}})
// db.Book.find({"pages": {$gte:600}})
// db.Book.find({"pages": {$lt:100}})
// db.Book.find({"pages": {$lte:88}})
// db.Book.find({"pages": {$in:[209,928,384]}})
// db.Book.find({"pages": {$nin:[209,928,384]}})

// AND / OR / NOR :-
db.Book.find({$and: [{"pages": {$gt:297}}, {"year":1952}]})
db.Book.find({$or: [{"pages": {$gt:297}}, {"year":1952}]})
db.Book.find({$nor: [{"pages": {$gt:297}}, {"year":1952}]})
db.Book.find({"pages":{$not:{$eq:209}}})
db.Book.find({"pages":{$eq:209}})

// Aggregate / Aggregation :-

// Match:-
db.Book.find({"language":"English"})
db.Book.aggregate([
    {$match:{"language":"English","pages":{$lte:209}}}
])

// Project:-
db.Book.find({"language":"English"},{author:1 , pages:1 , _id:0 , title:1})
db.Book.find({"language":"English"}).projection({author:1 , pages:1 , _id:0 , title:1})
db.Book.find({"language":"English"}).select({author:1 , pages:1 , title:1})

db.Book.aggregate([
    {$match:{"language":"English"}},
    {$project:{author:1 , pages:1 , title:1 , year:1}},
])

// Limit:-
db.Book.find().limit(20)
db.Book.aggregate([
    {$limit:24}
])

// Skip:-
db.Book.find().skip(5)
db.Book.aggregate([
    {$skip:10}
])

// Count:-
db.Book.find({"language":"English"}).count()
db.Book.aggregate([
    {$match:{"language":"English"}},
    {$count:"Total Count"},
])

// Group:-
db.Book.aggregate([
    {
        $group:{
            _id:{language:"$language"},
            author:{$push:"$author"},
            total:{$sum:1}
        }
    },

    {
        $sort:{
            _id:1
        }
    }
])

// Lookup:-

db.user.aggregate([
    {
        $lookup:{
            from:"teacher",
            localField:"faculty",
            foreignField:"name",
            as:"Faculty"
        }
    }
])


//  Unwind:-
db.user.aggregate([
    {
        $lookup:{
            from:"teacher",
            localField:"faculty",
            foreignField:"name",
            as:"Faculty"
        }
    },
    {$unwind:"Faculty"}
])

