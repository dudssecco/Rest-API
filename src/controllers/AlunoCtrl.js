import Aluno from "../models/Aluno"

class AlunoCtrl {
  async index(req, res){
    try{
      const alunos = await Aluno.findAll();
      return res.json(alunos)
    }catch(err){
      return res.status(400).json({
        errors: err.errors.map(err => err.message)
      })
    }
  }

  async show(req, res){
    try{
      const { id } = req.params
      if(!id){
        return res.status(400).json({
          errors: ['ID inválido']
        })
      }

      const aluno = await Aluno.findByPk(id)
      if(!aluno){
        return res.status(400).json({
          errors: ['Aluno inexistente']
        })
      }

      return res.json(aluno)
    }catch(err){
      return res.status(400).json({
        errors: err.errors.map(err => err.message)
      })
    }
  }

  async store(req, res){
    try{
      const newAluno = await Aluno.create(req.body)
      const { id, nome, sobrenome, email, idade, peso, altura } = newAluno
      return res.json({ id, nome, sobrenome, email, idade, peso, altura })
    }catch(err){
      return res.status(400).json({
        errors: err.errors.map(err => err.message)
      })
    }
  }

  async update(req, res){
    try{
      const { id } = req.params
      if(!id){
        return res.status(400).json({
          errors: ['ID inválido']
        })
      }

      const aluno = await Aluno.findByPk(id)
      if(!aluno){
        return res.status(400).json({
          errors: ['Aluno inexistente']
        })
      }

      const updateAluno = await aluno.update(req.body)
      return res.json(updateAluno)
    }catch(err){
      return res.status(400).json({
        errors: err.errors.map(err => err.message)
      })
    }
  }

  async delete(req, res){
    try{
      const { id } = req.params
      if(!id){
        return res.status(400).json({
          errors: ['ID inválido']
        })
      }

      const aluno = await Aluno.findByPk(id)
      if(!aluno){
        return res.status(400).json({
          errors: ['Aluno inexistente']
        })
      }

      await aluno.destroy()
      return res.json('Aluno apagado com sucesso')
    }catch(err){
      return res.status(400).json({
        errors: err.errors.map(err => err.message)
      })
    }
  }
}

export default new AlunoCtrl
