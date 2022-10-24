<template>
  <div class="meuslivros">
    <div v-for="(livro, index) in myBooks"
      :key="index"
      @click="removeLivro(livro.nomeLivro)" class="mybooks">{{ livro.nomeLivro }}</div>
    <div><img src="../assets/images/edit-book.png" class="editbook" alt=""></div>
    <div><img src="../assets/images/lixeira.png" class="lixeira" alt=""></div>
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
.meuslivros{
  padding: 130px 0;
  display: flex;
  background-color: aqua;
}

.mybooks{
  width: 250px;
  height: 330px;
  background-color: red;
  margin-left: 500px;
  border-radius: 10px;

}

.editbook{
  width: 40px;
  height: 40px;
  margin-left: 570px;
  margin-top: 20px;
  position: absolute;
}

.lixeira{
  width: 40px;
  height: 40px;
  margin-left: 640px;
  margin-top: 20px;
}
</style>