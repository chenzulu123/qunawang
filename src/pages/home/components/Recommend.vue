<template>
    <div class='top'>
        <div class="recommend-title">
            <p><span></span>猜你喜欢</p>
            <ul>
                <li class="item">
                    <div class="item-content">
                        <img src="http://img1.qunarzz.com/sight/p0/1508/2e/d9363ce50a88c8c5ff5a138c67687cd4.water.jpg_200x200_1c15c8f5.jpg" alt="" class="item-img">
                        <div class="item-info">
                            <p class="item-title">深圳野生动物园</p>
                            <p class="item-desc">
                                <span></span>
                                <span>11867条评论</span>
                            </p>
                            <p class="item-desc">
                                <span>￥230起</span>
                                <span class="item-area">南山区</span>
                            </p>
                        </div>
                    </div>
                    <div class="button-style">
                        <button class="item-buttom">查看详情</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeRecommend"
    };
</script>

<style lang="less" scoped>
    .top {
        background: #ccc;
    }
    
    .recommend-title {
        margin-top: 0.2rem;
        line-height: 0.8rem;
        background: #fff;
        margin-top: 0.2rem;
        .item {
            display: flex;
            height: 1.9rem;
            .item-content {
                flex: 1;
                height: 100%;
                .item-img {
                    width: 1.7rem;
                    height: 1.7rem;
                    padding: 0.1rem;
                }
                .item-info {
                    flex: 1;
                    height: 100%;
                }
            }
            .button-style {
                width: 100%;
                text-align: center;
                float: left;
            }
        }
    }
</style>