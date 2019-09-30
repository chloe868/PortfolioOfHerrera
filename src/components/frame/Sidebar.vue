<template>
  <sidebar-menu :menu="menu" />
</template>
 
<script>
    export default {
        data() {
            return {
                menu: [
                    {
                        header: true,
                        title: 'Dashboards',
                        hiddenOnCollapse: true
                    },
                    {
                        href: '/dashboard',
                        title: 'Dashboard',
                        icon: 'fas fa-tachometer-alt'
                    },
                    {
                        href: '/Profile',
                        title: 'Profile',
                        icon: 'fas fa-user'
                    },
                    {
                        href: '/add',
                        title: 'Add Course and Subjects',
                        icon: 'fas fa-plus-square'
                    },
                    {
                        href: '/Login',
                        title: 'Logout',
                        icon: 'fas fa-power-off'
                    }
                ]
            }
        }
    }
</script>