const app = Vue.createApp({
  data() {
    return {
      name: "MiradeWeb",
      age: 10,
      imageUrl:
        "https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },
    favoriteNumber() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
