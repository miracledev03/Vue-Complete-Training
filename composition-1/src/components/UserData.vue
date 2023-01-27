<template>
    <h2>{{ userName }}</h2>
    <h3>{{ userAge }}</h3>
</template>

<script>
import { computed, inject } from 'vue';

export default {
    props: ['firstName', 'lastName', 'age'],
    setup(props, context) {
        const uName = computed(function () {
            return props.firstName + ' ' + props.lastName;
        });

        console.log(context);

        const age = inject('userAge');

        console.log(age);

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