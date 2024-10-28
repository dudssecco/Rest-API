import Sequelize, { Model } from "sequelize";
import bcrypt from 'bcryptjs'

export default class User extends Model {
  static init(sequelize){
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [2, 255],
            msg: 'O campo Nome deve conter entre 2 e 255 caracteres'
          }
        }
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email já existente'
        },
        validate: {
          isEmail: {
            msg: 'Email inválido'
          }
        }
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [8, 50],
            msg: 'O campo Senha deve conter entre 8 e 50 caracteres',
          },
        },
      },
    }, { sequelize });

    this.addHook('beforeSave', async (user) => {
      if(user.password){
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    })

    return this
  }
}
