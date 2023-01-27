<template>
    <h2>{{ userName }}</h2>
    <h3>{{ userAge }}</h3>
</template>

<script>
import { computed, inject, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';

export default {
    props: ['firstName', 'lastName', 'age'],
    setup(props, context) {
        const uName = computed(function () {
            return props.firstName + ' ' + props.lastName;
        });

        console.log(context);

        const age = inject('userAge');

        console.log(age);

        onBeforeMount(function() {
            console.log('onBeforeMount');
        });

        onMounted(function() {
            console.log('onMounted');
        });

        onBeforeUpdate(function() {
            console.log('onBeforeUpdate');
        });

        onUpdated(function() {
            console.log('onUpdated');
        });

        onBeforeUnmount(function() {
            console.log('onBeforeUnmount');
        });
        
        onUnmounted(function() {
            console.log('onUnmounted');
        });

        // context.emit('save-data', 1); // this.$emit('save-data', 1);

        return {
            userName: uName,
            userAge: age,
        };
    },
    // computed: {
    //     userName() {
    //         return this.firstName + ' ' + this.lastName;
    //     }
    // }
}
</script>