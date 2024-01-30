db.createCollection("client")

db.client_master.insertMany([
    {
        ClientNo:'C0001',
        Name:'Ivan Bayross',
        Address1:'A/14',
        Address2:'Worli',
        City:'Mumbai',
        Pincode:400054,
        State:'Maharastra',
        BalDue:15000
    },
    {
        ClientNo:'C0002',
        Name:'Mamta Muzumdar',
        Address1:'65',
        Address2:'Nariman',
        City:'Madras',
        Pincode:780001,
        State:'Tamil Nadu',
        BalDue:0
    },
    {
        ClientNo:'C0003',
        Name:'Chhaya Bankar',
        Address1:'P-7',
        Address2:'Bandra',
        City:'Mumbai',
        Pincode:400057,
        State:'Maharastra',
        BalDue:5000
    },
    {
        ClientNo:'C0004',
        Name:'Ashwini Joshi',
        Address1:'A/5',
        Address2:'Juhu',
        City:'Bangalore',
        Pincode:560001, 
        State:'Karnataka',
        BalDue:0
    },
    {
        ClientNo:'C0005',
        Name:'Hansel Colaco',
        Address1:'A/15',
        Address2:'Worli',
        City:'Mumbai',
        Pincode:400060,
        State:'Mumbai',
        BalDue:2000
    },
    {
        ClientNo:'C0006',
        Name:'Deepak Sharma',
        Address1:'66',
        Address2:'Nariman',
        City:'Mangalore',
        Pincode:560050,
        State:'Karnataka',
        BalDue:0
    }
])

db.client_master.find()

// [
//     {
//       _id: ObjectId('65b0d6022f84ddecea033fa1'),
//       ClientNo: 'C0001',
//       Name: 'Ivan Bayross',
//       Address1: 'A/14',
//       Address2: 'Worli',
//       City: 'Mumbai',
//       Pincode: 400054,
//       State: 'Maharastra',
//       BalDue: 15000
//     },
//     {
//       _id: ObjectId('65b0d6022f84ddecea033fa2'),
//       ClientNo: 'C0002',
//       Name: 'Mamta Muzumdar',
//       Address1: '65',
//       Address2: 'Nariman',
//       City: 'Madras',
//       Pincode: 780001,
//       State: 'Tamil Nadu',
//       BalDue: 0
//     },
//     {
//       _id: ObjectId('65b0d6022f84ddecea033fa3'),
//       ClientNo: 'C0003',
//       Name: 'Chhaya Bankar',
//       Address1: 'P-7',
//       Address2: 'Bandra',
//       City: 'Mumbai',
//       Pincode: 400057,
//       State: 'Maharastra',
//       BalDue: 5000
//     },
//     {
//       _id: ObjectId('65b0d6022f84ddecea033fa4'),
//       ClientNo: 'C0004',
//       Name: 'Ashwini Joshi',
//       Address1: 'A/5',
//       Address2: 'Juhu',
//       City: 'Bangalore',
//       Pincode: 560001,
//       State: 'Karnataka',
//       BalDue: 0
//     },
//     {
//       _id: ObjectId('65b0d6022f84ddecea033fa5'),
//       ClientNo: 'C0005',
//       Name: 'Hansel Colaco',
//       Address1: 'A/15',
//       Address2: 'Worli',
//       City: 'Mumbai',
//       Pincode: 400060,
//       State: 'Mumbai',
//       BalDue: 2000
//     },
//     {
//       _id: ObjectId('65b0d6022f84ddecea033fa6'),
//       ClientNo: 'C0006',
//       Name: 'Deepak Sharma',
//       Address1: '66',
//       Address2: 'Nariman',
//       City: 'Mangalore',
//       Pincode: 560050,
//       State: 'Karnataka',
//       BalDue: 0
//     }
//   ]

db.client_master.find({State: "Mumbai"})
db.client_master.findOne({State: "Mumbai"})
db.client_master.updateOne({State: "Mumbai"}, {$set: {State:"Surat", Baldue:"1000"}}, {upsert:true})
db.client_master.updateOne({}, {$set: {State:"Surat", Baldue:"1000"}}, {upsert:true})
db.client_master.deleteOne({Baldue:0})
db.client_master.deleteMany({city:"Madras"})
db.client_master.drop()
db.dropDatabase()
