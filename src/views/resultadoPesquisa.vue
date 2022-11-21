<template>
  <div>
    <div v-for="(livro, index) in livrosFiltrados" :key="index">
      {{ livro }}
    </div>
  </div>
</template>

<script>
import * as fb from "@/plugins/firebase";
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
    async getBooks() {
      const logtasks = await fb.tasksCollection.get();
      for (const doc of logtasks.docs)
        this.resultado.push({
          id: doc.id,
          nomeLivro: doc.data().nomeLivro,
          autor: doc.data().autor,
          editora: doc.data().editora,
          imagem: doc.data().imagem,
        });
      this.filtrar();
    },
    filtrar() {
      console.log(this.resultado);
      this.livrosFiltrados = this.resultado.filter((livro) => {
        return livro.editora
          .toUpperCase()
          .includes(this.pesquisa.toUpperCase());
      });
      console.log(this.livrosFiltrados);
    },
  },
};
</script>

<style>
</style>