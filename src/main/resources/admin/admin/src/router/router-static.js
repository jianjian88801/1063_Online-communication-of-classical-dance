import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import kecheng from '@/views/modules/kecheng/list'
    import shipin from '@/views/modules/shipin/list'
    import discussfushi from '@/views/modules/discussfushi/list'
    import storeup from '@/views/modules/storeup/list'
    import kechengleixing from '@/views/modules/kechengleixing/list'
    import discussshipin from '@/views/modules/discussshipin/list'
    import discusswudaojiaoliu from '@/views/modules/discusswudaojiaoliu/list'
    import fushi from '@/views/modules/fushi/list'
    import wudaojiaoliu from '@/views/modules/wudaojiaoliu/list'
    import zaixianzhaosheng from '@/views/modules/zaixianzhaosheng/list'
    import discusskecheng from '@/views/modules/discusskecheng/list'
    import orders from '@/views/modules/orders/list'
    import fushileixing from '@/views/modules/fushileixing/list'
    import shipinfenlei from '@/views/modules/shipinfenlei/list'
    import config from '@/views/modules/config/list'
    import huiyuanyonghu from '@/views/modules/huiyuanyonghu/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '舞蹈资讯',
        component: news
      }
      ,{
	path: '/kecheng',
        name: '课程',
        component: kecheng
      }
      ,{
	path: '/shipin',
        name: '视频',
        component: shipin
      }
      ,{
	path: '/discussfushi',
        name: '服饰评论',
        component: discussfushi
      }
      ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
      ,{
	path: '/kechengleixing',
        name: '课程类型',
        component: kechengleixing
      }
      ,{
	path: '/discussshipin',
        name: '视频评论',
        component: discussshipin
      }
      ,{
	path: '/discusswudaojiaoliu',
        name: '舞蹈交流评论',
        component: discusswudaojiaoliu
      }
      ,{
	path: '/fushi',
        name: '服饰',
        component: fushi
      }
      ,{
	path: '/wudaojiaoliu',
        name: '舞蹈交流',
        component: wudaojiaoliu
      }
      ,{
	path: '/zaixianzhaosheng',
        name: '在线招生',
        component: zaixianzhaosheng
      }
      ,{
	path: '/discusskecheng',
        name: '课程评论',
        component: discusskecheng
      }
      ,{
        path: '/orders/:status',
        name: '订单管理',
        component: orders
      }
      ,{
	path: '/fushileixing',
        name: '服饰类型',
        component: fushileixing
      }
      ,{
	path: '/shipinfenlei',
        name: '视频分类',
        component: shipinfenlei
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/huiyuanyonghu',
        name: '会员用户',
        component: huiyuanyonghu
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
