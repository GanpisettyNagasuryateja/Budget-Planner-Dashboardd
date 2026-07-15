<template>
  <div class="transaction-table">
    <h2>Transactions</h2>

    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="(transaction, index) in transactions"
          :key="index"
        >
          <td>{{ transaction.type }}</td>
          <td>{{ transaction.category }}</td>
          <td>₹{{ transaction.amount }}</td>
          <td>{{ transaction.date }}</td>

          <td>
            <button
              class="delete-btn"
              @click="$emit('deleteTransaction', index)"
            >
              Delete
            </button>
          </td>
        </tr>

        <tr v-if="transactions.length === 0">
          <td colspan="5">No transactions found.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineProps({
  transactions: {
    type: Array,
    required: true,
  },
});

defineEmits(["deleteTransaction"]);
</script>

<style scoped>
.transaction-table {
  width: 90%;
  margin: 40px auto;
}

h2 {
  margin-bottom: 15px;
  text-align: center;
}

table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  box-shadow: 0 2px 8px rgba(0,0,0,.1);
}

th,
td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: center;
}

th {
  background: #4CAF50;
  color: white;
}

.delete-btn {
  background: #f44336;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
}

.delete-btn:hover {
  background: #d32f2f;
}
</style>