export default {
    routes: [{
        path: '/Login',
        name: 'login',
        component: resolve => require(['modules/Login.vue'], resolve),
        meta: {
            tokenrequired: false
        }
    },
    {
        path: '/Register',
        name: 'register',
        component: resolve => require(['modules/Register.vue'], resolve),
        meta: {
            tokenrequired: false
        }
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: resolve => require(['components/frame/Dashboard.vue'], resolve),
        meta: {
            tokenrequired: true
        }
    },
    {
        path: '/Profile',
        name: 'profile',
        component: resolve => require(['components/frame/Profile.vue'], resolve),
        meta: {
            tokenrequired: true
        }
    },
    {
        path: '/UpdateProf',
        name: 'Updateprofile',
        component: resolve => require(['components/frame/UpdateProf.vue'], resolve),
        meta: {
            tokenrequired: true
        }
    },
    {
        path: '/add',
        name: 'AddSubjects&Course',
        component: resolve => require(['components/frame/addSubjects.vue'], resolve),
        meta: {
            tokenrequired: true
        }
    }
]
}








