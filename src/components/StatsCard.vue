<template>

<div class="card">

    <h3>{{ title }}</h3>

    <h2>₹{{ amount }}</h2>

</div>

</template>

<script setup>

defineProps({
    title:String,
    amount:Number
})

</script>

<style scoped>

.card{

    width:220px;
    background:white;
    padding:20px;
    border-radius:10px;
    text-align:center;
    box-shadow:0 0 10px rgba(0,0,0,.1);

}

</style>