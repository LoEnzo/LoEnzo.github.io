const utils = require('./utils/index.js');
// docs下的路径
const filePath = '/BigData/';
let filenames = [];
filenames = utils.getChildren(filePath);
module.exports = [
  utils.getSidebar('大数据相关框架学习', filenames, false),
];