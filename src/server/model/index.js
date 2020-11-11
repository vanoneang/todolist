const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('todo', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  dialectOptions: {
    socketPath: '/var/run/mysqld/mysqld.sock',
    supportBigNumbers: true,
    bigNumberStrings: true
  },
  logging: false,
  timezone: '+08:00',
  port: 3306
})

sequelize.sync({
  force: false
});

module.exports = sequelize