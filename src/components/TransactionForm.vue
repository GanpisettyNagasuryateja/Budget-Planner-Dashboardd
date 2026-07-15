<template>
  <div class="form-container">
    <h2>Add Transaction</h2>

    <form @submit.prevent="saveTransaction">

      <label>Type</label>
      <select v-model="type">
        <option>Income</option>
        <option>Expense</option>
      </select>

      <label>Amount</label>
      <input
        type="number"
        v-model="amount"
        placeholder="Enter Amount"
      />

      <label>Category</label>
      <input
        type="text"
        v-model="category"
        placeholder="Salary, Food, Rent..."
      />

      <label>Date</label>
      <input
        type="date"
        v-model="date"
      />

      <label>Description</label>
      <input
        type="text"
        v-model="description"
        placeholder="Optional"
      />

      <button type="submit">
        Save Transaction
      </button>

    </form>
  </div>
</template>


<script setup>
import { ref } from "vue";

const emit = defineEmits(["addTransaction"]);

const type = ref("Income");
const amount = ref("");
const category = ref("");
const date = ref("");
const description = ref("");

const saveTransaction = () => {
  console.log("Button clicked");

  emit("addTransaction", {
    type: type.value,
    amount: Number(amount.value),
    category: category.value,
    date: date.value,
    description: description.value,
  });


  // Clear the form
  amount.value = "";
  category.value = "";
  date.value = "";
  description.value = "";
  type.value = "Income";
};
</script>

<style scoped>
.form-container{
    width:400px;
    margin:40px auto;
    background:white;
    padding:20px;
    border-radius:10px;
    box-shadow:0 0 10px rgba(0,0,0,.1);
}

label{
    display:block;
    margin-top:10px;
}

input,select{
    width:100%;
    padding:10px;
    margin-top:5px;
}

button{
    width:100%;
    margin-top:20px;
    padding:10px;
    background:#4CAF50;
    color:white;
    border:none;
    cursor:pointer;
}
</style>