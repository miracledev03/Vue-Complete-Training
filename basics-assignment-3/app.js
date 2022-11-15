const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      result: "Not there yet",
    };
  },
  watch: {
    result(value) {
      if (value == "Too much!") {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
          that.result = "Not there yet";
        }, 5000);
      }
    },
  },
  methods: {
    addFive() {
      this.counter = this.counter + 5;

      if (this.counter > 37) {
        this.result = "Too much!";
      }
    },
    addOne() {
      this.counter = this.counter + 1;

      if (this.counter > 37) {
        this.result = "Too much!";
      }
    },
  },
});

app.mount("#assignment");
