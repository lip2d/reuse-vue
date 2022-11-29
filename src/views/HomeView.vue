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
            style="width: 100%; height: 100%; border-radius: 10px"
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
      const logtasks = await fb.tasksCollection
        .where("disponibilidade", "!=", "Indisponível")
        .get();
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
  background: #9e6942;
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
  background: transparent;
}
::-webkit-scrollbar-track:active {
  background: transparent;
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
  width: 320px;
  height: 450px;
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
  font-size: 25px;
  font-family: "Montserrat";
  font-weight: 700;
  border-radius: 5px;
  width: 280px;
}
</style>