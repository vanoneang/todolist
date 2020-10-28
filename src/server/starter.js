const App = require('koa')
const path = require('path')
const cors = require('@koa/cors')
const serve = require('koa-static')
const mount = require('koa-mount')
const koaBody = require('koa-body');
const router = require('koa-router')();

const InitManager = require('./init')

const app = new App()

const staticPages = new App()

staticPages.use(serve(path.join(__dirname, "../../build")))
app.use(mount("/", staticPages))

app.use(cors())
app.use(koaBody({
  multipart: true, // 支持文件上传
  formidable: {
    maxFieldsSize: 2 * 1024 * 1024, // 最大文件为2兆
    keepExtensions: true, // 保持文件的后缀
    multipart: true // 是否支持 multipart-formdate 的表单
  }
}));
app.use(serve(path.join(__dirname)));

InitManager.init(app)
app.use(router.allowedMethods());

module.exports = app.listen(3000, () => {
  console.log('Server is starting at port 3000')
});
