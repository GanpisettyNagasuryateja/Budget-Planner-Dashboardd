<template>
  <div>
    <!-- Navbar -->
    <Navbar @logout="logout" />

    <!-- Dashboard Content -->
    <div class="dashboard">

      <StatsCard
        title="Total Income"
        :amount="totalIncome"
      />

      <StatsCard
        title="Total Expense"
        :amount="totalExpense"
      />

      <StatsCard
        title="Savings"
        :amount="savings"
      />

    </div>

    <TransactionForm @addTransaction="addTransaction" />

    <TransactionTable
      :transactions="transactions"
      @deleteTransaction="deleteTransaction"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useRouter } from "vue-router";

import Navbar from "../components/Navbar.vue";
import StatsCard from "../components/StatsCard.vue";
import TransactionForm from "../components/TransactionForm.vue";
import TransactionTable from "../components/TransactionTable.vue";

import { db } from "../firebase/firebase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { onMounted } from "vue";

const router = useRouter();

const totalIncome = ref(0);
const totalExpense = ref(0);
const savings = ref(0);
const transactions = ref([]);

const addTransaction = async (transaction) => {
  try {
    await addDoc(collection(db, "transactions"), {
      uid: auth.currentUser.uid,
      ...transaction,
    });

    await loadTransactions();

  } catch (error) {
    console.error(error);
  }
};

const loadTransactions = async () => {

  transactions.value = [];
  totalIncome.value = 0;
  totalExpense.value = 0;

  const q = query(
    collection(db, "transactions"),
    where("uid", "==", auth.currentUser.uid)
  );

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((document) => {

    const transaction = {
      id: document.id,
      ...document.data(),
    };

    transactions.value.push(transaction);

    if (transaction.type === "Income") {
      totalIncome.value += transaction.amount;
    } else {
      totalExpense.value += transaction.amount;
    }
  });

  savings.value = totalIncome.value - totalExpense.value;
};

onMounted(() => {
  loadTransactions();
});

const deleteTransaction = async (index) => {

  const transaction = transactions.value[index];

  await deleteDoc(doc(db, "transactions", transaction.id));

  await loadTransactions();
};


const logout = async () => {
  await signOut(auth);
  router.push("/login");
};
</script>

<style scoped>
.dashboard {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 40px;
  flex-wrap: wrap;
  padding: 20px;
}
</style>