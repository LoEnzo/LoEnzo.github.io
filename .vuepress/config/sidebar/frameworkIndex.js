const utils = require('./utils/index.js');
// docs下的路径
const filePath = '/Framework/';
let filenames = [];
filenames = utils.getChildren(filePath);
module.exports = [
  utils.getSidebar('常用框架', filenames, false),
];