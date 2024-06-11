const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");

const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");


const reviewController = require("../controllers/review.js")




//POST ROUTE 
router.post("/",isLoggedIn, validateReview, wrapAsync(reviewController.createreview));
//DELETE REVIEW ROUTE
router.delete("/:reviewId",isLoggedIn,isReviewAuthor, wrapAsync(reviewController.destroyReview));

module.exports= router;

