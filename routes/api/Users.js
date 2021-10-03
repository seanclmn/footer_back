const express = require('express')
const router = express.Router()

const User = require('../../models/User')

router.get('/',(req,res)=>{
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(404).json({ nousersfound: 'No users were found'}))
})


router.get('/:id', (req,res)=>{
    User.findById(req.params.id)
        .then(user => res.json(book))
        .catch(err => console.log(err.message))
})

router.post('/',(req,res)=>{
    User.create(req.body)
        .then(user => res.json({msg: 'User added successfully.'}))
        .catch(err=>console.log(err.message))
})

router.put('/:id',(req,res)=>{
    User.findByIdAndUpdate(req.params.id, req.body)
        .then(user => res.json({msg: 'Updated successfully.'}))
        .catch(err => console.log(err.mssage))
})

router.delete('/:id', (req,res)=>{
    User.findByIdAndDelete(req.params.idd, req.body)
        .then(user=>res.json({msg: "User info deleted succesfully"}))
    .catch(err => console.log(err.message))
})

module.exports = router