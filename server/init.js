const Router = require("koa-router")
const requireDirectory = require("require-directory")

class InitManager {
  static init(app) {
    InitManager.app = app
    InitManager.initLoadRouters()
  }

  static initLoadRouters() {
    const apiDirectory = `${process.cwd()}/server/app/api`
    requireDirectory(module, apiDirectory, {
      visit: (obj) => {
        if(obj instanceof Router ){
          InitManager.app.use(obj.routes())
      }
      }
    })
  }
}

module.exports = InitManager