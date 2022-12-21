<template>
    <h1> Shopping Cart</h1>
    <p>Click a movie to REMOVE it from the cart</p>
    <input type="button" id="Return2" value="Back" @click="Return4()">

    <br> <br>

    <div class="objects">

        <img id="picture" @click="testFunction(option.position)" v-for="option in movieOptions" :src="option.poster" />

    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { indexStore } from "../store/index.js";
import { ref } from "vue";
import router from '../router';

const index = indexStore()
const { shoppingcart } = storeToRefs(index);
let movieOptions = ref(shoppingcart.value);

function testFunction(slot) {
    index.removeMovieItem(slot);
}

window.onclick = function (event) {
    if (event.target == myModal) {
        myModal.style.display = "none";
    }
}


function Return4() {
    router.push("/Mainstore");
}

</script>

<style>
.objects {
    display: grid;
    align-self: center;
    grid-template-columns: 15vw 15vw 15vw 15vw 15vw;
    grid-template-rows: 12vw 12vw 12vw 12vw;
    column-gap: 5vw;
    row-gap: 10vw;
    width: 10vw;
    height: 15vw;
    position: relative;
    left: 2vw;
}

#picture {
    width: 15vw;
    height: 20vw;
}
</style>