const fs = require('fs')
const path = require('path')
const Router = require('koa-router')

const router = new Router({
  prefix: '/stream'
})

router.post('/upload', async (ctx) => {

  const file = ctx.request.files.file
  const fileReader = fs.createReadStream(file.path);
  const filePath = path.join(__dirname, '../../static/upload/');
  const fileResource = filePath + `${file.name}`;

  const writeStream = fs.createWriteStream(fileResource);

  fileReader.pipe(writeStream);
  ctx.body = {
    url: `/${file.name}`,
    code: 0,
    message: '上传成功'
  };
  

})

module.exports = router
