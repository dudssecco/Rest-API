import User from "../models/User"

class UserCtrl {
  async store(req, res){
    try{
      const newUser = await User.create(req.body);
      const { id, nome, email } = newUser
      return res.json({ id, nome, email })
    } catch(err){
      console.error(err)
      return res.status(400).json({
        errors: err.errors.map(err => err.message)
      })
    }
  }

  async index(req, res){
    try{
      const users = await User.findAll({ attributes: ['id', 'nome', 'email']});
      return res.json(users)
    } catch{
      return res.json(null)
    }
  }

  async show(req, res){
    try{
      const { id } = req.params;
      const user = await User.findByPk(id)
      const { nome, email } = user
      return res.json({ id, nome, email })
    } catch{
      return res.json(null)
    }
  }

  async update(req, res){
    try{
      const user = await User.findByPk(req.userId)
      if(!user){
        res.status(400).json({
          errors: ['Usuário não encontrado']
        })
      }

      const newData = await user.update(req.body)
      const { id, nome, email } = newData
      return res.json({ id, nome, email })
    } catch(err){
      return res.status(400).json({
        errors: err.errors.map(err => err.message)
      })
    }
  }

  async delete(req, res){
    try{
      const user = await User.findByPk(req.userId)
      if(!user){
        res.status(400).json({
          errors: ['Usuário não encontrado']
        })
      }

      await user.destroy()
      return res.json(null)
    } catch(err){
      return res.status(400).json({
        errors: err.errors.map(err => err.message)
      })
    }
  }
}

export default new UserCtrl
