
const utils = require('./index.js');
let filenames = [];

const commonUtils = {
    getSidebar: function (filePath) {
        
        filenames = utils.getChildren(filePath);

        var title = this.getTitle(filePath);
        
        return module.exports = [utils.getSidebar(title, filenames, false)];
    },
    getTitle: function(filenames){
        if(filenames == '/BigData/'){
            return '大数据相关框架学习';
        }
        if(filenames == '/Framework/'){
            return "常用框架";
        }
        if(filenames == '/StudyNotes/'){
            return "学习笔记";
        }
        if(filenames == '/DevTools/'){
            return "开发工具";
        }
    }
};

module.exports = commonUtils;
