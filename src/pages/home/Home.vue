<template>
    <div>
        <!--父组件个子组件传值是通过属性的方式进行传值的-->
        <home-header :name="name"></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-recommend></home-recommend>
    </div>
</template>

<script>
    import HomeHeader from './components/Header';
    import HomeSwiper from './components/Swiper';
    import HomeIcons from './components/Icons';
    import HomeRecommend from './components/Recommend'
    export default {
        name: 'Home',
        components: {
            HomeHeader,
            HomeSwiper,
            HomeIcons,
            HomeRecommend
        },
        data(){
            return {
                name:""
            }
        },
        methods: {
            getHomeInfo() {
                const _this = this;
                this.$http.get('/api/index.json')
                .then(function(res) {
                    _this.name = res.data.name;
                    console.log(res);
                    
                })
            },
        },
        mounted() {
            this.getHomeInfo();
        }
    }
</script>

<style scoped>
    
</style>