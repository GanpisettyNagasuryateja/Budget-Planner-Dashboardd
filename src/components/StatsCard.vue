<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <h2>₹{{ amount }}</h2>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});
</script>

<style scoped>
.card {
  width: 220px;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  text-align: center;
  transition: 0.3s;
}

.card:hover {
  transform: translateY(-5px);
}

h3 {
  color: #666;
  margin-bottom: 10px;
}

h2 {
  color: #4CAF50;
  font-size: 28px;
}
</style>