const { Model, Sequelize } = require('sequelize')
const sequelize = require('./index')

class Todo extends Model {

}

Todo.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
  }, {
    sequelize,
    tableName: 'todo',
    modelName: 'todo'
  }
)

export { Todo as TodoModel }