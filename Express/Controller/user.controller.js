const  User = require('../Model/user.model');

exports.addUser = async (req, res) => {
     try {
        const {firstName, lastName, gender, email, password, age} = req.body;
        console.log(req.body);
        let newUser = await User.create({
            firstName,
            lastName,
            gender,
            email,
            password,
            age,
            gender
        });
        newUser.save();
        res.status(201).json({User: newUser , message:'New User Added'});
     } catch (error) {
        console.log(error);
        res.status(500).json({message:'Internal Server Error'});
     }
}