import Vue from "vue";

// 使用 Event Bus
// const bus = new Vue();

// export default bus;


const bus = new Vue({
    data () {
        return {
            // 定义数据
            editNewsData: {} //编辑当前新闻时的数据
        }
    },
    created () {
        // 绑定监听
        this.$on('editNewsData', (val) => {
            this.editNewsData = val
        })
    }
})

export default bus;