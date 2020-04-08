const router = require('express').Router();
let Userbase = require('../models/userbase.model');

router.route('/').get((req,res)=>{
    Userbase.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: '+err));
});

router.route('/add').post((req,res) => {
    const name = req.body.name;
    const email = req.body.email;
    const mobile =  Number(req.body.mobile);
    const address = req.body.address;
    const pincode = req.body.pincode;

    //console.log(name);
    const newUser = new Userbase({
        name,
        email,
        mobile,
        address,
        pincode
    });

   newUser.save()
   .then((data) => res.json(data))
   .catch(err => res.status(400).json('Error :'+err)); 
});

router.route('/:id').get((req, res) => {
    Userbase.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/:id').delete((req,res) => {
    Userbase.findByIdAndDelete(req.params.id)
    .then((data) => res.json(data))
    .catch(err => res.status(400).json('Error : '+err));
});

router.route('/update/:id').post((req,res)=>{
    Userbase.findById(req.params.id)
    .then(user => {
        user.name = req.body.name;
        user.email = req.body.email;
        user.mobile = req.body.mobile;
        user.address = req.body.address;
        user.pincode = req.body.pincode;

        user.save()
        .then((data ) => res.json(data))
        .catch(err => res.status(400).json('Error: '+err));

    })
    .catch(err => res.status(400).json('Error '+err));


});


module.exports = router;