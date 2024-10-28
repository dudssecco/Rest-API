import Aluno from "../models/Aluno"

class HomeCtrl {
  async index(req, res){
    const novoAluno = await Aluno.create({
      nome: 'Leticia',
      sobrenome: 'Martins',
      email: 'leticia@email.com',
      idade: 21,
      peso: 46.3,
      altura: 1.62,
    });
    res.json(novoAluno)
  }
}

export default new HomeCtrl
