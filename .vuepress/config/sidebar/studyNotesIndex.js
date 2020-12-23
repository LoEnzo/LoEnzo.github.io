const utils = require('./utils/index.js');
// docs下的路径
const filePath = '/StudyNotes/';
let filenames = [];
filenames = utils.getChildren(filePath);
module.exports = [
  utils.getSidebar('学习文档', filenames, false),
];