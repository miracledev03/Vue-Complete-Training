const app = Vue.createApp({
  data() {
    return {
      enteredText: "",
      tasks: [],
      listIsVisible: true,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredText);
    },
    toggleList() {
      this.listIsVisible = !this.listIsVisible;
    },
  },
});

app.mount("#assignment");
