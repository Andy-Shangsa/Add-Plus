const mongoose = require('mongoose');
//引入mongoose依赖
const Schema = mongoose.Schema;
//创建一个schema实例
const customerSchema = new Schema({
    name: {type: String},
    pwd: {type: String},
    uId: {type:Number}
});
//创建一个model，meigeschema实例对应一个model
const Models = {
    Customer: mongoose.model('Customer', customerSchema)
}
//创建mongodb连接
mongoose.connect('mongodb://localhost/customer')

const db = mongoose.connection

db.on('error', function () {
    console.log('Database connection error.')
})

db.once('open', function () {
    console.log('The database has connected.')
})
//导出项目模块models接口
module.exports = Models