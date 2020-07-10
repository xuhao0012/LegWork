import Router from 'vue-router'
import Vue from 'vue'
import discovery from '../components/discovery/discovery.vue'
import release from '../components/release/release.vue'
import message from '../components/message.vue'
import mine from '../components/mine.vue'
import addrelease from '../components/release/addrelease.vue'
import releasedetail from '../components/release/releasedetail.vue'

Vue.use(Router)

export default new Router ({
  mode: 'history',
  base: process.env.BASE_URL,
    routes:[
      {
        path: '/',
        name: 'home',
        redirect: '/discovery'
      },
      {
        path: '/discovery',
        name: 'discovery',
        component: discovery
      },
      {
        path: '/release',
        name: 'release',
        component: release,
      },
      {
        path: '/releasedetail',
        name: 'releasedetail',
        component: releasedetail
      },
      {
        path: '/addrelease',
        name: 'addrelease',
        component: addrelease
      },
      {
        path: '/message',
        name: 'message',
        component: message
      },
      {
        path: '/mine',
        name: 'mine',
        component: mine
      }
    ]
})