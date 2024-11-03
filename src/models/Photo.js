import Sequelize, { Model } from "sequelize";

export default class Photo extends Model {
  static init(sequelize){
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'O campo originalname não pode ser vazio'
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'O campo filename não pode ser vazio'
          },
        },
      },
    }, { sequelize });
    return this
  }

  static associate(models){
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' })
  }
}
