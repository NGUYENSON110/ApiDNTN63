const Comment = require('../model/comment.model')

const commentController = {

    // Add comment 
    addComment: async (req, res) => {
        try {
            const newComment = await new Comment(req.body)
            newComment.save();
            res.status(200).json(newComment);
        } catch (error) {
            res.status(500).json(error);
        }
    },



    //  GET ALL COMMENT
    getallComment: async (req, res) => {
        try {
            const allComment = await Comment.find();
            res.status(200).json(allComment);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    //    GET AN HOTEL
    getanComment: async (req, res) => {
        try {
            var query = {hotelId: req.params.id}
            console.log("req.params", req.params.id)
            const anComment = await Comment.find(query)
            res.status(200).json(anComment);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    //  UPDATE COMMENT

    updateComment: async (req, res) => {
        try {
            const updateComment = await Comment.findById(req.params.id);
            await updateComment.updateOne({ $set: req.body });
            res.status(200).json("update successfully");
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // DELETE COMMENT
    deleteComment: async(req,res) =>{
        try {
          await Comment.findByIdAndDelete(req.params.id);
          res.status(200).json("delete successfully");
        } catch (error) {
          res.status(500).json(error);
        }
      }
}

module.exports = commentController;