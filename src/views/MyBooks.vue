<template>
  <div style="padding: 150px 0">
    <div
      class="my-livro"
      v-for="(livro, index) in myBooks"
      :key="index"
      @click="removeLivro(livro.nomeLivro)"
    >
      {{ livro.nomeLivro }}
    </div>
  </div>
</template>

<script>
import { auth, tasksCollection, db } from "../plugins/firebase";

export default {
  data() {
    return {
      myBooks: [],
    };
  },
  mounted() {
    let user = auth.currentUser.uid;
    this.getMyBooks(user);
  },
  methods: {
    getMyBooks(uid) {
      tasksCollection
        .where("uid", "==", uid)
        .get()
        .then((livros) => {
          for (const livro of livros.docs) {
            this.myBooks.push(livro.data());
          }
        });
    },
    removeLivro(nome) {
      let batch = db.batch();
      tasksCollection
        .where("nomeLivro", "==", nome)
        .get()
        .then((livros) => {
          batch.delete(livros.docs[0]);
        });
    },
  },
};
</script>

<style>
</style>