<template>
  <nav class="navbar">
    <h2>💰 Budget Planner</h2>

    <button @click="$emit('logout')">
      Logout
    </button>
  </nav>
</template>

<style scoped>

.navbar{
    display:flex;
    justify-content:space-between;
    align-items:center;
    background:#4CAF50;
    color:white;
    padding:15px 30px;
}

button{
    padding:8px 16px;
    border:none;
    cursor:pointer;
}

</style>