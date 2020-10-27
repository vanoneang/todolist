const { Model, Sequelize } = require('sequelize')
const sequelize = require('./index')

class File extends Model {
  static async createRecord (args, commit) {
    const record = File.build(args);
    commit && (await record.save());
    return record;
  }
}

File.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    path: {
      type: Sequelize.STRING({ length: 500 }),
      allowNull: false
    },
    type: {
      type: Sequelize.STRING({ length: 10 }),
      allowNull: false,
      defaultValue: 'LOCAL',
      comment: 'LOCAL 本地，REMOTE 远程'
    },
    name: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    extension: {
      type: Sequelize.STRING(50)
    },
    size: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    uuid: {
      type: Sequelize.STRING(40),
      allowNull: true
    },
  }, {
    sequelize,
    tableName: 'file',
    modelName: 'file',
    indexes: [
      {
        name: 'uuid_del',
        unique: true,
        fields: ['uuid', 'delete_time']
      }
    ],
    options: {
      createdAt: 'create_time',
      updatedAt: 'update_time',
      deletedAt: 'delete_time',
      paranoid: true,
      getterMethods: {
        createTime() {
          return new Date(this.getDataValue('create_time')).getTime();
        },
        updateTime() {
          return new Date(this.getDataValue('update_time')).getTime();
        }
      }
    }
  }
)

module.exports = { FileModel: File  }