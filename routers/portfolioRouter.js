const express = require('express');
const model = require('../models/portfolioModel');
// const router = require('./userRouter');

const router = express.Router();
router.post('/add', (req, res) => {
    console.log(req.body)
    // res.send('response from product add')
    new model(req.body).save()
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)
        })

})
// product.get('/getall', (req, res) => {
//     res.send('response from product getall')
// })
router.get('/getall', (req, res) => {
    model.find({})
    .then((result)=>{
     res.json(result);
 
    }).catch((err)=>{
        res.status(500).json(err)
    })
 })
 router.get('/getbyid/:id', (req, res) => {
    model.findById(req.params.id)
    .then((result)=>{
     res.json(result)
    }).catch((err)=>{
    //  res.json(err)
    res.status(500).json(err)
    })
 })
 router.get('/getbyportfolio/:portfolio', (req, res)=>{
    console.log(req.params.email)
    model.findOne({email: req.params.email})
    .then((result)=>{
     res.json(result);
 
    }).catch((err)=>{
    //  res.json(err)
    res.status(500).json(err)
    })
})
router.put('/update/:id', (req, res) => {
    model.findByIdAndUpdate(req.params.id , req.body, {new: true})
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.status(500).json(err)
    })
    // res.send('response from product update')
})

router.delete('/delete/:id', (req, res) => {
    // res.send('response from user delete')
    model.findByIdAndDelete(req.params.id)
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.status(500).json(err)
    })
})
module.exports = router;