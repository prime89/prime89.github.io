<style scoped>
    @import 'styles/common.css';
    .main-body{
        height: 100%;
    }
</style>
<template>
    <div class="main-body">

         <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>

        <router-view v-if="!$route.meta.keepAlive">
    <!-- 这里是不被缓存的视图组件，比如 Edit！ -->
        </router-view>
    </div>
</template>
<script>
    export default {
        data () {
            return {}
        },
        computed: {
            islogin () {
                return true;
            }
        },
        mounted () {

        },
        beforeDestroy () {

        },
        methods: {

        },
        components: {
        }
    }
</script>
