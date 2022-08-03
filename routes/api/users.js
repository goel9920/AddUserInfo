const User = require('../../db').User
const route = require('express').Router()

route.get('/', (req, res) => {
    // We want to send an array of all users
    // From our database here

    User.findAll()
        .then((users) => {
            res.status(200).send(users)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not retrive users"
            })
        })

})

route.post('/', (req, res) => {
    // We will create a new user
    if (req.body.name=="") {
        return res.status(403).send({
            error: "name is required"
        })
    }
    if (req.body.email=="") {
        return res.status(404).send({
            error: "email is required"
        })
    }
    if (req.body.phone=="") {
        return res.status(405).send({
            error: "phone is required"
        })
    }

    User.create({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    }).then((user) => {
        res.status(201).send(user)
    }).catch((err) => {
        res.status(501).send({
            error: "Could not add new user"
        })
    })
})

exports = module.exports = route