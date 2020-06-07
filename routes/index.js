const express = require('express');
const router = express.Router();
const User = require('../model/User')

//Home route
router.get('/', (req, res)=>{
    res.render('home')
});

// Registration route
router.get('/register', (req, res)=>{
    res.render('registration');
});

//Post route
router.post('/register', (req, res)=>{
    const registrationData = {
        studentID: req.body.studentID,
        name: req.body.name,
        password: req.body.password,
        age: req.body.age,
        level: req.body.level,
        program: req.body.program
    }
    User.findOne({studentID: registrationData.studentID}).then((user)=>{
        if(user){
            console.log('Sorry there is a student with that ID please check if your ID is correct');
            return res.redirect('/register')
        } else {
            User.create(registrationData).then((newUser)=>{
                res.redirect('/students')
            })
        }
    })
});


router.get('/students', (req, res)=>{
    User.find({}).then((users)=>{
        res.render('students', {
            users: users.reverse()
        })
    }).catch((error)=>{
        res.json({
            msg: `Sorrr ${error.message}`
        })
    });
})



module.exports = router;
