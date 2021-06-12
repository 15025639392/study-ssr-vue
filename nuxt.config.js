/** nuxt 配置文件 */
module.exports = {
    router:{
        base: '/abc',
        // routers 一个数组，路由配置表
        // resolve: 解析路由组件路径
        extendRoutes(routers,resolve){
            routers.push({
                path:'/hello',
                name:'hello',
                component: resolve(__dirname,'pages/about.vue')
            })
        }
    }
}