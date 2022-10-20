<template>
  <div>
    <Header />
    <BarraLateral />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import BarraLateral from "@/components/BarraLateral.vue";
export default {
  components: { Header, BarraLateral },
};
</script>

<style></style>
