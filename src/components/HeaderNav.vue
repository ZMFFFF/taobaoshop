<template>
    <div class="nav">
        <div class="nav_center">
            <div class="logo">阳光沙滩-券场</div>
            <div class="tab">
                <router-link to="/">
                    <p>发现</p>
                </router-link>
                <router-link to="/onsell">
                    <p>特惠</p>
                </router-link>
            </div>
            <div class="serch">
                <input @keyup.enter="search()" v-model="inpVal" type="text" placeholder="复制（淘宝的标题或者关键字）找优惠券!">
                <button class="btn_search" @click="search">搜索</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            inpVal: null
        }
    },
    created() {

        // console.log(this.$route.query.keyword);
    },
    watch: {
        $route(newVal, oldVal) {
            if (newVal.query.keyword) {
                this.inpVal = newVal.query.keyword
            } else {
                this.inpVal = null
            }
        }
    },
    methods: {
        search() {
            this.$router.push(`/search?keyword=${this.inpVal}`)
        }
    }
}
</script>

<style scoped lang="scss">
.nav {
    margin-bottom: 20px;
    width: 100%;
    height: 70px;
    box-shadow: 0 5px 10px #d4d4d4;
    background: #fff;

    .nav_center {
        width: 1140px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;

        div {
            margin-right: 30px;
        }

        .logo {
            font-size: 24px;
            line-height: 70px;
            font-weight: 600;
            color: #c9302c;

        }

        .tab {
            display: flex;

            p {
                cursor: pointer;
                float: left;
                color: #000;
                font-size: 16px;
                font-weight: 600;
                line-height: 70px;
                padding-left: 15px;
                padding-right: 15px;
            }

            .router-link-exact-active {
                background: rgba(0, 0, 0, .03922);
            }
        }
    }

    .serch {
        input {
            width: 300px;
            height: 32px;
            padding: 0 15px;
            border: 1px solid #dcdfe6;
            box-sizing: border-box;
            color: #606266;
            border-radius: 4px;
            outline: 0;

            &:focus {
                border: 1px solid #409eff;
            }
        }

        .btn_search {
            width: 100px;
            height: 32px;
            margin-left: 20px;
            cursor: pointer;
            border: 0;
            background-color: #f56c6c;
            color: #fff;
            border-radius: 3px;

            &:hover {
                background-color: #f78989;
            }
        }
    }
}
</style>