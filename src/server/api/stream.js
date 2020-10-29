const fs = require('fs')
const path = require('path')
const dayjs = require('dayjs')
const Router = require('koa-router')
const { FileModel } = require('../model/file')

const router = new Router({
  prefix: '/stream'
})

router.get('/', async (ctx) => {
  const files = await FileModel.findAll();
  ctx.body = {

    code: 0,
    files
  }
})

router.post('/upload', async (ctx) => {

  const file = ctx.request.files.file

  const fileReader = fs.createReadStream(file.path);
  const formatDay = getFormatDay()
  const filePath = path.join(__dirname, '../static/upload/', formatDay);
  if (!fs.existsSync(filePath)) { 
    fs.mkdirSync(filePath, { recursive: true }, function(err){
      if (err) console.log("Failed to create file at " + filePath);
    });
  }
  const fileResource = filePath + `${file.name}`;

  const writeStream = fs.createWriteStream(fileResource);

  fileReader.pipe(writeStream);

  const saved = await FileModel.createRecord(
    {
      path: formatDay + file.name,
      name: file.name,
      size: file.size
    },
    true
  );
  ctx.body = {
    id: saved.id,
    code: 0,
    message: '上传成功'
  };

})

function getFormatDay() {
  return dayjs().format('YYYY/MM/DD');
}

module.exports = router
