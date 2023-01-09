import { defineStore } from "pinia";

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
    displayMovies(text) {
      this.movies.push({
        text,
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
