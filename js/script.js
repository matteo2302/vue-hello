console.log("Vue ok", Vue);

const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      title: "ci si diverte con Vue",
      image: "img/neom-QZGW6t70IsI-unsplash.jpg",
    };
  },
});

app.mount("#root");
