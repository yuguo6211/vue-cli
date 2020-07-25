<template>
    <div class="base">
        <p>base组件</p>
        <!-- 文本{{}} -->
        <h1>h1文本：{{text}}</h1>

        <!-- html -->
        <div v-html="htmlText"></div>

        <!-- 属性绑定id -->
        <p v-bind:id="attrId">属性绑定：id</p>

        <!-- 表达式 -->
        <p>表达式：{{text ? '表达式有值' : ''}}</p>

        <!-- 绑定值 -->
        <input type="text" v-model="bindVal" />
        <p>input值：{{bindVal}}</p>

        <!-- 条件渲染v-if -->
        <p v-if="isShow">条件渲染v-if：{{text}}</p>
        <!-- 条件渲染v-show -->
        <p v-show="isShow">条件渲染v-show：{{text}}</p>

        <!-- 遍历v-for -->
        <p v-for="(item, index) in list" :key="index">遍历v-for：{{item}}</p>

        <button @click="clickHandler">事件绑定</button>

        <!-- 事件修饰符 -->
        <div @click="outClickHandler" style="background-color: #ccc;;width: 200px; height: 100px; margin: 10px auto; text-align: center;">
            <button @click="inClickHandler">内部点击</button>
            <!-- <button @click.stop="inClickHandler">内部点击(.stop修饰符)</button> -->
        </div>
        <!-- 子组件1 -->
        <!-- <subCompnonet1 /> -->
        <!-- 子组件2 -->
        <!-- <subCompnonet2 /> -->
    </div>
</template>

<script>
// import subCompnonet1 from './subComponent1';
// import subCompnonet2 from './subComponent2';

export default {
    name: 'Base',
    props: {},
    components: {
        // subCompnonet1,
        // subCompnonet2
    },
    beforeCreate() {
        console.log('base beforeCreate');
    },
    created() {
        console.log('base created');
    },
    beforeMount() {
        console.log('base beforeMount');
    },
    mounted() {
        console.log('base mounted');
    },
    beforeDestroy() {
        console.log('base beforeDestroy');
    },
    destroyed() {
        console.log('base destroyed');
    },
    data() {
        return {
            text: '文本内容',
            htmlText: '<p style="color: #f00">这里是html文本</p>',
            attrId: 1234,
            bindVal: 'v-model绑定值',
            isShow: false,
            list: ['遍历1', '遍历2', '遍历3']
        };
    },
    methods: {
        // 点击事件
        clickHandler() {
            alert('触发了点击事件');
        },

        inClickHandler() {
            alert('in-点击事件');
        },

        outClickHandler() {
            alert('out-点击事件');
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
