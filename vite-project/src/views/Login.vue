<template>
    <h1> Login Page </h1>
    <input type="button" id="Return" @click="Return()" value="Back">
    <input type="button" id="Signin" @click="Login2()" value="login">
    <br> <br> <br>
    <form @submit="Login2()">
        <div id="Username"> Username: <input type="text" ref="usernameinput"></div>
        <br>
        <div id="Password"> Password: <input type="password" ref="passwordinput"></div>
    </form>


</template>

<script setup>
import { storeToRefs } from 'pinia';
import { indexStore } from "../store/index.js";
import { ref } from "vue";
import router from '../router';

const usernameinput = ref("")
const passwordinput = ref("")

function Return() {
    router.push("/");
}

function Login2() {
    if (passwordinput.value.value != "movies" || usernameinput.value.value != "tmdb") {
        router.push("/Popup");
    }
    else {
        router.push("./Mainstore");
    }
}

</script>

<style>
#Return {
    position: relative;
    width: 125px;
    height: 25px;
}

#Signin {
    position: sticky;
    left: 50.25vw;
    width: 125px;
    height: 25px;
}

div {
    text-align: center;
}

body {
    color: white;
    background-image: url("https://wallpapercave.com/wp/agLijth.jpg");
}
</style>