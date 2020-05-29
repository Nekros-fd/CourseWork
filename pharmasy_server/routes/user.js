
const express = require('express');
const router = express.Router();
const { User } = require("../models/users");


router.get('/', (req, res)=>{


    (async () => {

        // User.create({
        //     id: 1,
        //     name: 'Ростислав Костецький',
        //     login: 'kostet228And420',
        //     password: '12345678',
        //     date: new Date(2000, 6, 6),
        //     about: 'Я Ростислав Костецький та я навчаюся у Львівській Політехніці',
        //     cart: []
        // })
        // User.create({
        //     id: 2,
        //     name: 'Марта Лесик',
        //     login: 'martaNeLesuk',
        //     password: '13579',
        //     date: new Date(2000, 5, 23),
        //     about: 'Я Марта Лесик та я навчаюся у Львівській Політехніці',
        //     cart: []
        // })
        // User.create({
        //     id: 3,
        //     name: 'Петро Топилко',
        //     login: 'webMaster420',
        //     password: '87654321',
        //     date: new Date(1969, 7, 7),
        //     about: 'Я Петро Топилко та я приймаю дану курсову, хочу 100',
        //     cart: []
        // })

        let users = await User.find({});
        res.send(users)

    })();

});

router.get('/:id', (req, res)=>{


    (async () => {

        let user = await User.findOne({id: req.params.id});
        res.send(user)

    })();

});


module.exports = router;
