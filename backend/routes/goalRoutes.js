const express = require("express");
const router = express.Router();
const {getGoals, setGoals} = require('../controllers/goalControllers')

router.get('/', getGoals)
router.post('/', setGoals)

router.put('/',(req,res) => {
    res.json({
        message: "Menambahkan method Put"
    })    
})

module.exports = router;