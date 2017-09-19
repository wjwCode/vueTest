import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Event from '@/components/event/Event'
import Order from '@/components/order/Order'
import Realtime from '@/components/realtime/Realtime'
import Patrol from '@/components/patrol/Patrol'
import Prerun from '@/components/prerun/Prerun'
import Device from '@/components/device/Device'
import User from '@/components/user/User'
import Consumption from '@/components/consumption/Consumption'
import DataQuery from '@/components/dataquery/DataQuery'
import Log from '@/components/log/Log'
import Knowledge from '@/components/knowledge/Knowledge'
import SystemConfig from '@/components/systemconfig/SystemConfig'

Vue.use(Router)
// 路由定义
export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },{
      path: '/event',
      name: 'event',
      component: Event
    },{
      path: '/order',
      name: 'order',
      component: Order
    },{
      path: '/realtime',
      name: 'realtime',
      component: Realtime
    },{
      path: '/patrol',
      name: 'patrol',
      component: Patrol
    },{
      path: '/prerun',
      name: 'prerun',
      component: Prerun
    },{
      path: '/device',
      name: 'device',
      component: Device
    },{
      path: '/user',
      name: 'user',
      component: User
    },{
      path: '/consumption',
      name: 'consumption',
      component: Consumption
    },{
      path: '/dataquery',
      name: 'dataquery',
      component: DataQuery
    },{
      path: '/log',
      name: 'log',
      component: Log
    },{
      path: '/knowledge',
      name: 'knowledge',
      component: Knowledge
    },{
      path: '/systemconfig',
      name: 'systemconfig',
      component: SystemConfig
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
