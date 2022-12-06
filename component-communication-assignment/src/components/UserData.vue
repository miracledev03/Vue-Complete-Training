<template>
    <form class="user-data" @submit.prevent="submitData">
        <h4>User Data</h4>
        <br>
        <div class="input-wrapper">
            <label>Name: </label>
            <input type="text" v-model="enteredName" />
        </div>

        <div class="input-wrapper">
            <label>Age: </label>
            <input type="text" v-model="enteredAge" />
        </div>

        <button type="submit">Set User Data</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            enteredName: '',
            enteredAge: ''
        }
    },
    emits: ['set-user-data'],
    methods: {
        submitData() {
            this.$emit('set-user-data', this.enteredName, this.enteredAge);
        }
    }
}
</script>