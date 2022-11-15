const app = Vue.createApp({
  data() {
    return {
      enteredData: "",
      enteredData2: "",
    };
  },
  methods: {
    showAlert() {
      alert("Button is clicked!");
    },
    showInputData(event) {
      this.enteredData = event.target.value;
    },
    showInputData2(event) {
      this.enteredData2 = event.target.value;
    },
  },
});

app.mount("#assignment");
