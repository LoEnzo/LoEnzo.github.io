
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
            return '大数据相关学习笔记';
        }
        if(filenames == '/Framework/'){
            return "常用框架学习笔记";
        }
        if(filenames == '/StudyNotes/'){
            return "学习笔记";
        }
        if(filenames == '/DevTools/'){
            return "开发工具";
        }
        if(filenames == '/LinuxNotes/'){
            return "Linux学习笔记";
        }
        if(filenames == '/JavaNotes/'){
            return "Java学习笔记";
        }
        if(filenames == '/SpringCloudNotes/'){
            return "SpringCloud学习笔记";
        }
        if(filenames == '/Other/'){
            return "其他未分类笔记";
        }
        if(filenames == '/GoNotes/'){
            return "Go学习笔记";
        }
    }
};

module.exports = commonUtils;
