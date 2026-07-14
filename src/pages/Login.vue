<template>
  <div class="container">
    <div class="card">

      <h1>Budget Planner</h1>
      <h2>Login</h2>

      <form @submit.prevent="login">

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

        <button>
          Login
        </button>

      </form>

      <p>
        Don't have an account?
        <router-link to="/register">Register</router-link>
      </p>

    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");

const router = useRouter();

const login = async () => {
  try {

    await signInWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );

    alert("Login Successful");

    router.push("/dashboard");

  } catch (error) {
    alert(error.message);
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
    box-shadow:0 0 10px rgba(0,0,0,.1);
}

input{
    width:100%;
    padding:10px;
    margin-bottom:15px;
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

h1,h2,p{
    text-align:center;
}

</style>