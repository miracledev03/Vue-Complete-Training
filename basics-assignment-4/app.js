const app = Vue.createApp({
  data() {
    return {
      inputClass: "",
      showParagraph: true,
      backgroundColor: "",
    };
  },
  computed: {
    paragraphClasses() {
      return [this.inputClass, this.showParagraph ? "visible" : "hidden"];
    },
  },
  methods: {
    toggleParagraph() {
      this.showParagraph = !this.showParagraph;
    },
  },
});

app.mount("#assignment");
