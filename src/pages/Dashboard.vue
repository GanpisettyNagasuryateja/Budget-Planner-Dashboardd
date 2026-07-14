<template>

<Navbar @logout="logout"/>

<div class="dashboard">

<StatsCard
title="Income"
:amount="50000"
/>

<StatsCard
title="Expense"
:amount="20000"
/>

<StatsCard
title="Savings"
:amount="30000"
/>

</div>

</template>

<script setup>

import Navbar from "../components/Navbar.vue";
import StatsCard from "../components/StatsCard.vue";

import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useRouter } from "vue-router";

const router=useRouter();

const logout=async()=>{

await signOut(auth);

router.push("/login");

}

</script>

<style scoped>

.dashboard{

display:flex;

justify-content:center;

gap:20px;

margin-top:40px;

}

</style>