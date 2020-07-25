<template>
    <div class="base">
        <p>sub2组件</p>
    </div>
</template>

<script>
import {EventBus} from '../utils/EventBus';

export default {
    name: 'Base2',
    mounted() {
        EventBus.$on('eventBusClick', (msg) => {
            console.log('sub2 on eventBusClick:', msg);
        });
        // console.log('sub mounted');
    },
    data() {
        return {};
    },
    methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
