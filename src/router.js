import Vue from 'vue'
import Router from 'vue-router'
import NewFeature from "@/components/NewFeature";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'new',
            component: NewFeature
        }
    ]
})