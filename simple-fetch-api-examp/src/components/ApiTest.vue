<script>
export default {
  props: {
    msg: String,
  },
  data() {
    return {
      fact: "",
    };
  },
  methods: {
    fetchData() {
      fetch('https://api.coindesk.com/v1/bpi/currentprice.json', {
        method: "GET"
      })
          .then((response) => {
            response.json().then((data) => {
              this.fact = data.disclaimer; //just access the object
            });
          })
          .catch((err) => {
            console.error(err);
          });
    },
  },
};
</script>

<template>
  <div class="hello">
    <h1>Random Fact:</h1>
    <button @click="fetchData">Click Me!</button>
    <p v-if="fact">{{ fact }}</p>
  </div>
</template>

<style scoped>

</style>
