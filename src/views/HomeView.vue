<template>
  <div class="tudo">
    <div class="texto-catalogo"></div>
    <div class="box-scroll">
    <div class="container-livros">
      <div
        class="livros"
        v-for="(livro, index) in livros"
        :key="index"
        @click="setProduto(livro)"
      >
        <img
          :src="livro.imagem"
          alt="Livro Imagem"
          style="width: 100%; height: 100%"
        />
        <span class="nome-livro">{{ livro.nomeLivro }}</span>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import * as fb from "@/plugins/firebase.js";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      livros: [],
    };
  },
  mounted() {
    this.getLivros();
    console.log(fb.auth.currentUser.uid);
  },
  methods: {
    ...mapMutations(["SET_PRODUCT"]),
    async getLivros() {
      const logtasks = await fb.tasksCollection.get();
      for (const doc of logtasks.docs)
        this.livros.push({
          id: doc.id,
          nomeLivro: doc.data().nomeLivro,
          autor: doc.data().autor,
          editora: doc.data().editora,
          numpag: doc.data().numpag,
          descricao: doc.data().descricao,
          imagem: doc.data().imagem,
          condicao: doc.data().condicao,
        });
      console.log(this.livros);
    },
    setProduto(liv) {
      let livro = Object.assign(liv);

      this.SET_PRODUCT(livro);

      this.$router.push({ name: "book" });
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap");

* {
  margin: 0;
  padding: 0;
  border: 0;
}
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: #9E6942;
  border-radius: 50px;
}
::-webkit-scrollbar-thumb:hover {
  background: #85904e;
}
::-webkit-scrollbar-thumb:active {
  background: #393f1b;
}
::-webkit-scrollbar-track {
  background: transparent;
  border: 0px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-track:hover {
  background: transparent
}
::-webkit-scrollbar-track:active {
  background: transparent
}
::-webkit-scrollbar-corner {
  background: transparent;
}
body {
  background-color: #fdf7e6;
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

.bt1 {
  padding-left: 10%;
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

.usericon {
  width: 40px;
  height: 40px;
  cursor: pointer;
  margin-right: 40px;
}

.wall {
  display: flex;
  font-family: "Montserrat";
  justify-content: center;
}

.eo2 {
  position: relative;
}

.e1 {
  margin-top: 170px;
  margin-left: 25px;
  border-radius: 5px;
  width: 90px;
  height: 120px;
  background-color: #bd8761;
  position: absolute;
}

.e2 {
  margin-left: 50px;
  margin-top: 150px;
  width: 90px;
  height: 120px;
  background-color: #85904e;
  border-radius: 5px;
  position: absolute;
}

.txt {
  position: absolute;
  font-weight: bold;
  color: #3a2718;
  font-size: 30px;
  font-family: "Montserrat";
  top: 35%;
  left: 22%;
}

.e3 {
  margin-top: 520px;
  margin-left: 25px;
  border-radius: 5px;
  width: 90px;
  height: 120px;
  background-color: #bd8761;
  position: absolute;
}

.e4 {
  margin-left: 50px;
  margin-top: 500px;
  width: 90px;
  height: 120px;
  background-color: #85904e;
  border-radius: 5px;
  position: absolute;
}
.tudo {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 100px;
  overflow: hidden;
}
.texto-catalogo {
  margin-top: 150px;
  margin-left: 20px;
  height: 33px;
  width: 100%;
  background-color: #85904e;
  position: relative;
  right: 0;
}
.texto-catalogo::before {
  content: "Livros:";
  background-color: #fff9e8;
  border-radius: 0 10px 10px 0;
  font-size: 30px;
  padding-right: 2%;
}
.box-scroll {
  height: 700px;
  position: absolute;
  overflow-x: scroll;
  margin-top: 15%;
}
.box-scroll::-webkit-scrollbar {
  display: none;
}
.container-livros {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-start;
}

.livros {
  position: relative;
  margin: 0 50px;
  width: 350px;
  height: 450px;
  background-color: #393f1b;
}

.nome-livro {
  position: absolute;
  display: block;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  color: #393f1b;
  text-align: center;
  padding: 5px 30px;
  font-size: 1.6em;
  font-family: "Montserrat";
  font-weight: 700;
  border-radius: 5px;
}
</style>