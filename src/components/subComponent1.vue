<template>
    <div class="base">
        <p>sub1组件</p>
        <button @click="EventBusHandler">eventBus通信</button>
    </div>
</template>

<script>
import {EventBus} from '../utils/EventBus';

export default {
    name: 'Base1',
    props: {
        msg: String
    },
    inject: ['foo'],
    beforeCreate() {
        console.log('sub beforeCreate');
    },
    created() {
        // console.log('inject', this.foo);
        console.log('sub created');
    },
    beforeMount() {
        console.log('sub beforeMount');
    },
    mounted() {
        console.log('sub mounted');
    },
    beforeDestroy() {
        console.log('sub beforeDestroy');
    },
    destroyed() {
        console.log('sub destroyed');
    },
    data() {
        return {};
    },
    methods: {
        EventBusHandler() {
            EventBus.$emit('eventBusClick', 'sub1 button click');
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
