require("./bootstrap");
window.Vue = require("vue");

import VueRouter from "vue-router";
import App from "./app/App.vue";
import routes from "./app/routes/routes";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: routes,
});

const viewModel = new Vue({
    el: "#app",
    router: router,
    render: function (createElement) {
        return createElement(App);
    },
});
