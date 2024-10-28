import User from "../models/User"

class UserCtrl {
  async store(req, res){
    try{
      const novoUser = await User.create(req.body);
      res.json(novoUser)
    } catch(err){
      console.error(err)
      res.status(400).json({
        errors: err.errors.map(err => err.message)
      })
    }
  }
}

export default new UserCtrl
