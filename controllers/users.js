"use strict"

const User = require('../models/user')

function postUsers(req,res){
    let user = new User();
    user.name = req.body.name;
    user.phone = req.body.phone;
    user.email = req.body.email;
    user.password = req.body.password;
    user.signupDate = req.body.signupDate;

    user.save((err, User)=>{
        if (err) return res.status(404).send({message: `Algo salio mal: ${err}`});
        res.send({users: User});
    })
}
function getUsers(req,res){
    User.find({},(err, users)=>{
        if (err) return res.status(500).send({message:  `Algo salio mal: ${err}`})
        if (!users) return res.status(404).send({message: "No hay usuarios"})

        res.send({users: users})
    })
}
module.exports = {
    postUsers,
    getUsers
}
