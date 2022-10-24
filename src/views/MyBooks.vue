<template>
  <div class="meuslivros">
    <div v-for="(livro, index) in myBooks"
      :key="index"
      @click="removeLivro(livro.nomeLivro)" class="mybooks">
      <img
            :src="livro.imagem"
            alt="Livro Imagem"
            style="width: 100%; height: 100%; border-radius: 10px;"
          />   
          <div class="icons">
      <div><img src="../assets/images/edit-book.png" class="editbook" alt=""></div>
      <div><img src="../assets/images/lixeira.png" class="lixeira" alt=""></div>
    </div>
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
.meuslivros{
  padding: 130px 0;
  display: flex;
  max-width: 950px;
  margin-left: 385px;
  height: 410px;
  margin-top: 50px;
  overflow-x: scroll;
}

.mybooks{
  min-width: 250px;
  min-height: 330px;
  background-color: red;
  border-radius: 10px;
  margin-left: 20px;
  margin-right: 20px;
}

.editbook{
  width: 40px;
  height: 40px;
  margin-top: 20px;
}

.lixeira{
  width: 40px;
  height: 40px;
  margin-top: 20px;
}

.icons{
  bottom: 100px;
  width: 300px;
  display: flex;
  gap: 30px;
  margin-left: 75px;
}
</style>