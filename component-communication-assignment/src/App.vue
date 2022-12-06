<template>
    <user-data @set-user-data="setUserData" />
    <active-user :username="username" :age="age" />
</template>

<script>
export default {
    data() {
        return {
            username: '',
            age: ''
        }
    },
    methods: {
        setUserData(name, age) {
            this.username = name;
            this.age = age;
        }
    }
}
</script>

<style>
body {
    background: coral;
}

#app {
    max-width: 780px;
    margin: 60px auto;
    padding: 32px;
    display: flex;
    justify-content: space-between;
    background: #fff;
}

.user-data {
    width: 50%;
    padding: 30px;
}

.input-wrapper {
    margin-bottom: 24px;
}

label {
    width: 100%;
    font-size: 20px;
}

input {
    width: 100%;
    font-size: 20px;
    margin-top: 8px;
}

.active-user {
    width: 50%;
    padding: 30px;
}
</style>