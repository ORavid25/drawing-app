const express=require('express');
const router=express.Router();

router.get('/', (req, res)=> {
    res.redirect('https://http://localhost:8080/');
})

module.exports = router;