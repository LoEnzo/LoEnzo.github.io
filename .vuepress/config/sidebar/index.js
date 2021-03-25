const fs = require('fs');
const path = require('path');
const FOLDERPATH = '../../../blogs';

const utils = {
    getSidebar: function (title, children = [''], collapsable = true, sidebarDepth = 2) {
        return {
            title,
            children,
            collapsable,
            sidebarDepth
        }
    },
    getChildren: function (filePath) {
        let childrenFiles = [];
        const files = fs.readdirSync(path.resolve(__dirname, FOLDERPATH + filePath))

        files.forEach(function (filename) {
            //获取单个文件或者目录完整路径
            var fullname = path.join(path.resolve(__dirname, FOLDERPATH + filePath), filename);
            var stats = fs.statSync(fullname);
            if (!stats.isDirectory()) {
                filename = filename.slice(0, -3);
                var ss = filename.toLocaleUpperCase();
                if (filename.toLocaleUpperCase() === 'README') {
                    filename = '';
                }
                childrenFiles.push(filename);
            }
        })
        childrenFiles = childrenFiles.sort();

        console.log(filePath + ' :' + childrenFiles);
        return childrenFiles;
    }
};

module.exports = utils;
