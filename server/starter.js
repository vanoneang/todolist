const App = require('koa')


const InitManager = require('./init')

const app = new App()



InitManager.init(app)

app.listen(3000, () => {
  console.log('Server is starting at port 3000')
});
