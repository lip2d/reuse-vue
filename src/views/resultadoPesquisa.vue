<template>
  <div class="livro-resultado">
    <div v-for="(livro, index) in livrosFiltrados" :key="index">
      <div class="livroBuscado">
        <img
          @click="toBook(livro)"
          class="livrosBox"
          :src="livro.imagem"
          alt="Livro Imagem"
          style="width: 100%; height: 100%; border-radius: 10px"
        />
      </div>
    </div>
  </div>
</template>

<script>
import * as fb from "@/plugins/firebase";
import { mapMutations } from "vuex";
export default {
  props: ["busca"],
  data() {
    return {
      resultado: [],
      livrosFiltrados: [],
      teste: [],
    };
  },
  mounted() {
    this.pesquisa = this.$route.path;
    this.getBooks();
  },
  methods: {
    ...mapMutations(["SET_PRODUCT"]),
    async getBooks() {
      const logtasks = await fb.tasksCollection.get();
      for (const doc of logtasks.docs)
        this.resultado.push({
          id: doc.id,
          nomeLivro: doc.data().nomeLivro,
          autor: doc.data().autor,
          editora: doc.data().editora,
          numpag: doc.data().numpag,
          descricao: doc.data().descricao,
          imagem: doc.data().imagem,
          condicao: doc.data().condicao,
        });
      this.filtrar();
    },
    filtrar() {
      console.log(this.busca);
      this.livrosFiltrados = this.resultado.filter((livro) => {
        return (
          livro.nomeLivro.toUpperCase().includes(this.busca.toUpperCase()) ||
          livro.editora.toUpperCase().includes(this.busca.toUpperCase()) ||
          livro.autor.toUpperCase().includes(this.busca.toUpperCase())
        );
      });
      console.log(this.livrosFiltrados);
    },
    toBook(livro) {
      this.SET_PRODUCT(livro);
      this.$router.push({ path: "/book" });
    },
  },
};
</script>

<style scoped>
.livro-resultado {
  margin-top: 200px;
  margin-left: 100px;
  position: absolute;
  display: flex;
  overflow-x: scroll;
  gap: 50px;
}
.livroBuscado {
  height: 400px;
  width: 250px;
  display: flex;
}
</style>