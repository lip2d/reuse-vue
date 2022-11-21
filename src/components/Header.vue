<template>
  <div class="container">
    <nav class="header">
      <img src="../assets/images/logo.png" class="img" alt="imagem" />

      <input
        class="pesquisa"
        placeholder="Busque aqui"
        v-model="pesquisa"
        @keyup.enter="buscar"
      />
      <ul class="eu1">
        <li @click="toHomePage">HOME</li>
        <li class="li2">CHAT</li>
        <li>ATENDIMENTO</li>
      </ul>
      <div>
        <img
          src="../assets/images/user-icon.png"
          class="usericon"
          alt="user"
          @click="toProfile"
        />
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pesquisa: "",
    };
  },
  methods: {
    toProfile() {
      this.$router.push({ path: "/profile" });
    },
    toHomePage() {
      this.$router.push({ path: "/home" });
    },
    buscar() {
      if (this.pesquisa) {
        this.$router.push({
          name: "results",
          params: { busca: this.pesquisa },
        });
      }
    },
  },
};
</script>

<style>
.usericon {
  width: 40px;
  height: 40px;
  cursor: pointer;
  margin-right: 40px;
}

.eu1 {
  display: flex;
  list-style: none;
  font-family: "Montserrat";
  font-size: 26px;
  color: #fff9e8;
  cursor: pointer;
  padding: 40px 100px 38px 150px;
  font-weight: bold;
}

.li2 {
  padding-left: 70px;
  padding-right: 70px;
}

.container {
  margin: 0;
  padding: 0;
}

.header {
  width: 100%;
  height: 110px;
  background-color: #bfc297;
  position: fixed;
  display: flex;
  z-index: 1;
}

.img {
  width: 100px;
  height: 85px;
  cursor: pointer;
  padding-top: 12px;
  padding-left: 13px;
}

.pesquisa {
  background-color: #fff9e8;
  border: 1px solid #9e6942;
  border-radius: 50px;
  width: 65%;
  height: 59px;
  font-size: 24px;
  font-family: "Montserrat";
  box-shadow: 0px 2px 5px#9E6942;
  color: #393f1b;
  padding-left: 15px;
  margin-top: 23px;
  margin-left: 60px;
}
</style>