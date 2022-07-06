const express = require('express');
const router = express.Router();
const userController=require("../controller/usercontroller")
const bookcontroller=require("../controller/bookcontroller")
const userModel = require("../models/userModel")
const validator=require("../validator/validator")

// User APIs
router.post('/register', userController.createUser)

router.post('/login', )


// Books API
router.post('/books',bookcontroller.createBook)

router.get('/books',bookcontroller.getBook)

router.get('/books/:bookId',bookcontroller.getBookByParams)

router.put('/books/:bookId',bookcontroller.updateBookByParams)

router.delete('/books/:bookId',bookcontroller.deleteBookByParams)


//Review APIs

router.post('/books/:bookId/review', )

router.put('/books/:bookId/review/:reviewId', )

router.delete('/books/:bookId/review/:reviewId', )




module.exports=router;