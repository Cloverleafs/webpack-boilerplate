const { body } = document

// 消除移动端 300ms 的点击延迟
import FastClick from 'fastclick'
FastClick.attach(body)

// 启动 web app
import router from './views/router'
const div = document.createElement('div')
body.appendChild(div)
router.start(require('./views/_root.vue'), div)
