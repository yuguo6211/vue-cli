<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <!-- <Base :msg="text" /> -->
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
// import Base from './components/base';

export default {
    name: 'App',
    components: {
        HelloWorld,
        // Base
    },
    provide: {
        foo: 'bar'
    },
    data() {
        return {
            text: 'App msg'
        };
    },
    beforeCreate() {
        console.log('App beforeCreate');
    },
    created() {
        console.log('App created');
    },
    beforeMount() {
        console.log('App beforeMount');
    },
    mounted() {
        console.log('App mounted');
    },
    beforeDestroy() {
        console.log('App beforeDestroy');
    },
    destroyed() {
        console.log('App destroyed');
    }
};
</script>
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
