import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

//重写push方法
VueRouter.prototype.push = function (location, res, rej) {
    if (res && rej) {
        originPush.call(this, location, res, rej);
    } else {
        originPush.call(
            this,
            location,
            () => {},
            () => {}
        );
    }
};

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/onsell",
        name: "onsell",
        component: () => import("../views/Onsell.vue"),
    },
    {
        path: "/search",
        name: "search",
        component: () => import("../views/Search.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
