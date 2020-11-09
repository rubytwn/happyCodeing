//引入express套件
const express = require('express')

//引入連接database的檔案
const db = require('./member_db_connect')

const cors = require('cors');


//建立web server物件
const app = express()

const multer = require('multer');

// 初始化設定
const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
      fileSize: 2 * 1024 * 1024,  // 限制 2 MB
    },
    fileFilter (req, file, callback) {  // 限制檔案格式為 image
      if (!file.mimetype.match(/^image/)) {
        callback(new Error().message = '檔案格式錯誤');
      } else {
        callback(null, true);
      }
    }
  });


//設定要使用的樣版引擎ejs
//app.set('view engine' , 'ejs')

const corsOptions = {
    credentials: true,
    origin: function(origin, cb){
        console.log(`origin: ${origin}`);
        cb(null, true);
    }
};
app.use(cors(corsOptions));

//會解析req過來的JSON字串
//urlencoded是exoress的body-parser功能
app.use(express.urlencoded({extended: false}));
app.use( express.json() );
app.use(express.static('public'));


const memberRoutes = require('./routers/memberRoutes');
app.use('/member', memberRoutes);


app.listen(3000,function(){
    console.log('啟動server!!')
})