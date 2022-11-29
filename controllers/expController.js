const exp = require('../model/exp.model');

const expController = {
    

    // ADD 
    addExp: async (req, res) => {
        try {
          const newExp = await new exp(req.body);
          newExp.save();
          res.status(200).json(newExp);
        } catch (error) {
          res.status(500).json(error);
        }
      },

      
  // GET ALL HOTEL
  getallExp: async (req, res) => {
    try {
      const allExp = await exp.find();
      res.status(200).json(allExp);
    } catch (error) {
      res.status(500).json(error);
    }
  },
    
}
module.exports = expController;