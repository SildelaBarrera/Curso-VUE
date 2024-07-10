<template>
 
</template>

<script>
export default {
  props: {
    power: Number,
    upPower: Function,
  },

  setup(props) {
    const marca = "Audi";
    const modelo = "A4";

    console.log(props);

    return {
      marca,
      modelo,
    };
  },
};
</script>

<style></style>
