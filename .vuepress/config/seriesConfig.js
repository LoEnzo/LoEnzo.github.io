module.exports = {
    "/blogs/K8sNotes/": [
        {
          text: "K8S",
          children: ["K3s", "K3sPractice"],
        }
      ],
       // 一个系列文章分组示例
      "/blogs/GoNotes/": [
        {
            text: '基础',
            children: [ '00Goland', '01GoBaseStudy' ],
            collapsible: true // 默认展开，true 为折叠
          },
          {
            text: '高级',
            children: [ '02GoDataType', '03GoProcessControl' ]
          }
      ]
  }