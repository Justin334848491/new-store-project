import { defineStore } from "pinia";
import axios from "axios";

export const indexStore = defineStore("main", {
  state: () => ({
    shoppingcart: [],
    movies: [],
    startup: 0,
    testcount: 0,
    isMovie: false,
  }),
  actions: {
    addItems(id) {
      this.shoppingcart.push(id);
    },
    displayMovies(text, id, posterimage) {
      this.movies.push({
        text,
        id,
        posterimage,
      });
    },
    finishedMovie() {
      this.isMovie = true;
    },
    removeMovieItem(arraySlot) {
      this.shoppingcart.splice(arraySlot, 1)
    },
  },
});
// Methods can also be async
// Learn getters - modify state variables without actually changing them
