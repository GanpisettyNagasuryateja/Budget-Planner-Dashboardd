<template>
  <div class="container">
    <div class="card">
      <h1>Budget Planner</h1>
      <h2>Create Account</h2>

      <form @submit.prevent="register">

        <input
          type="text"
          placeholder="Full Name"
          v-model="name"
        />

        <input
          type="email"
          placeholder="Email"
          v-model="email"
        />

        <input
          type="password"
          placeholder="Password"
          v-model="password"
        />

        <button type="submit">
          Register
        </button>

      </form>

      <p>
        Already have an account?
        <router-link to="/login">Login</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { ref } from "vue";

const name = ref("");
const email = ref("");
const password = ref("");

const register = async () => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );

    console.log("User Created Successfully!");
    console.log(userCredential.user);

  } catch (error) {
    console.log(error.message);
  }
};
</script>

<style scoped>

.container{
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#f4f4f4;
}

.card{
    background:white;
    padding:30px;
    border-radius:10px;
    width:350px;
    box-shadow:0 0 10px rgba(0,0,0,0.1);
}

h1{
    text-align:center;
    color:#4CAF50;
}

h2{
    text-align:center;
    margin-bottom:20px;
}

input{
    width:100%;
    padding:10px;
    margin-bottom:15px;
    box-sizing:border-box;
}

button{
    width:100%;
    padding:10px;
    background:#4CAF50;
    color:white;
    border:none;
    cursor:pointer;
}

button:hover{
    background:#45a049;
}

p{
    text-align:center;
    margin-top:15px;
}

</style>