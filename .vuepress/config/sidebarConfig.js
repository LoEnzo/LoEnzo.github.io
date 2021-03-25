const commonUtils = require('./sidebar/common.js');

const bigData = commonUtils.getSidebar('/BigData/');
const devTools = commonUtils.getSidebar('/DevTools/');
const framework = commonUtils.getSidebar('/Framework/');
const studyNotes = commonUtils.getSidebar('/StudyNotes/');
const linuxNotes = commonUtils.getSidebar('/LinuxNotes/');
const JavaNotes = commonUtils.getSidebar('/JavaNotes/');
const SpringCloudNotes = commonUtils.getSidebar('/SpringCloudNotes/');

module.exports = {
    '/blogs/BigData/': bigData,
    '/blogs/DevTools/': devTools,
    '/blogs/Framework/': framework,
    '/blogs/StudyNotes/': studyNotes, 
    '/blogs/LinuxNotes/': linuxNotes,
    '/blogs/JavaNotes/': JavaNotes,
    '/blogs/SpringCloudNotes/': SpringCloudNotes,
};