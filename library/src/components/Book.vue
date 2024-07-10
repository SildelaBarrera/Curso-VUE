<template></template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const book1 = { title: "Potter 1", author: "Rowling" };
    const book2 = { title: "Harry 2", author: "JK" };
    const books = [book1, book2];
    let power = ref(40);

    const upPower = (newPower) => {
      console.log("Aumentar potencia");
      power.value = power.value + newPower;
      console.log(power.value);
    };
    const downPower = (newPower) => {
      console.log("Bajar potencia " + newPower);
      power.value--;
      console.log(power.value);
    };

    return {
      book1,
      book2,
      books,
      power,
      upPower,
      downPower,
    };
  },
};
</script>

<style></style>
