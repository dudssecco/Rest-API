import User from "../models/User"

class UserCtrl {
  async store(req, res){
    try{
      const novoUser = await User.create(req.body);
      return res.json(novoUser)
    } catch(err){
      console.error(err)
      return res.status(400).json({
        errors: err.errors.map(err => err.message)
      })
    }
  }

  async index(req, res){
    try{
      const users = await User.findAll()
      return res.json(users)
    } catch{
      return res.json(null)
    }
  }

  async show(req, res){
    try{
      const { id } = req.params;
      const user = await User.findByPk(id)
      return res.json(user)
    } catch{
      return res.json(null)
    }
  }

  async update(req, res){
    try{
      const { id } = req.params;
      if(!id){
        res.status(400).json({
          errors: ['Id não encontrado']
        })
      }

      const user = await User.findByPk(id)
      if(!user){
        res.status(400).json({
          errors: ['Usuário não encontrado']
        })
      }

      await user.update(req.body)

      return res.json(user)
    } catch(err){
      return res.status(400).json({
        errors: err.errors.map(err => err.message)
      })
    }
  }

  async delete(req, res){
    try{
      const { id } = req.params;
      if(!id){
        res.status(400).json({
          errors: ['Id não encontrado']
        })
      }

      const user = await User.findByPk(id)
      if(!user){
        res.status(400).json({
          errors: ['Usuário não encontrado']
        })
      }

      await user.destroy()
      return res.json(user)
    } catch(err){
      return res.status(400).json({
        errors: err.errors.map(err => err.message)
      })
    }
  }
}

export default new UserCtrl
