// module.exports = {
//     plugins: {
//       "vuepress-plugin-auto-sidebar": {
//         sort: {
//           readmeFirstForce: true
//         }
//       }
//     }
//   }

// const autoSidebar = require('vuepress-plugin-auto-sidebar')

// module.exports = {
//   plugins: {
//     "vuepress-plugin-auto-sidebar": {
//         title: {
//           mode: "uppercase",
//         },
//         sort: {
//           readmeFirstForce: true
//         }
//     },
//   },
// }

// module.exports = {
//     themeConfig: {
//       pluginAutoNav: {
//         /**
//          * Generate links for the sidebar (nests children)
//          */
//         createSidebar: true,
//         /**
//          * Generate links for the top navbar
//          */
//         createNav: true,
//         /**
//          * If true it should show the whole tree else show by section (landing page)
//          */
//         sidebarAllSections: false
//       }
//     },
//     plugins: [
//       "@ulu/vuepress-plugin-auto-nav"
//     ]
//   }

// const { defaultTheme } = require('@vuepress/theme-default')
// const navbar = require('./navbar.js')
// const sidebar = require('./sidebar.js')
// module.exports = {
//   plugins: [
//     require('vuepress-plugin-auto-sidebar-navbar')({
//         skipSidebar: false, // 默认生成sidebar
//         // skipNavbar: false, // 默认生成navbar
//         sidebarUrl: '.vuepress/sidebar.js', // sidebar路径
//         // navbarUrl: '.vuepress/navbar.js', // navbar路径
//     })
//   ],
//   theme: defaultTheme({
//     navbar, 
//     sidebar, 
//   })
// }