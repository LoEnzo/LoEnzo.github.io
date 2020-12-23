const utils = require('./utils/index.js');
// docs下的路径
const filePath = '/DevTools/';
let filenames = [];
filenames = utils.getChildren(filePath);
module.exports = [
  utils.getSidebar('开发工具', filenames, false),
];