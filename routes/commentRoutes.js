const router = require("express").Router();
const commentController = require('../controllers/commentController');


// ADD comment
router.post("/", commentController.addComment);

// Get all comment
router.get('/', commentController.getallComment);

// Update commnet 
router.get('/:id', commentController.getanComment);

// Update commnet 
router.put('/:id', commentController.updateComment);

module.exports = router;