import { parseComponent } from '../src/index';

const vueTemplate = `
<template lang="jade">
    <div>{{test}}</div>
</template> 
<script>
export default {
    data() {
        return {
            test: hello
        }
    },
    created() {
        console.log('created');
    }
}
</script>
<style scope="true" lang="less">
div {
    background: red;
}
</style>
`
console.log(parseComponent(vueTemplate));

