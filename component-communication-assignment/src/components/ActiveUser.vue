<template>
    <div class="active-user">
        <h4>Active User</h4>
        <br>
        <h2>{{ username }}</h2>
        <h3>{{ age }}</h3>
    </div>
</template>

<script>
export default {
    props: {
        username: {
            type: String,
            required: true
        },
        age: {
            type: String,
            required: true
        }
    },
}
</script>