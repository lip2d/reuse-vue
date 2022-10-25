<template>
  <div style="display: flex;">
    <div class="meuslivros">
      <div v-for="(livro, index) in myBooks"
        :key="index"
        class="mybooks">
        <img
              :src="livro.imagem"
              alt="Livro Imagem"
              style="width: 100%; height: 100%; border-radius: 10px;"
            />
            <div class="icons">
        <div><img src="../assets/images/edit-book.png" class="editbook" alt=""></div>
        <div><img src="../assets/images/lixeira.png" @click="deleteLivro(livro.id)" class="lixeira" alt=""></div>
      </div>
    </div>
    </div>
    <div>
    <ul class="dadosmeuslivros">
      <li class="d">Nome do Livro:</li>
      <input>
      <li class="d">Autor:</li>
      <input>
      <li class="d">Editora:</li>
      <input type="text">
      <li class="d">Número de páginas:</li>
      <input type="text">
      <li class="d">Sinopse:</li>
      <input type="text">
      <li class="d">Condição Livro:</li>
      <input type="text">
      <li class="d">Disponibilidade Livro</li>
      <select name="" id=""><option value="">Disponível</option>
      <option value="">Indisponível</option></select>
      <li class="d">Salvar</li>
    </ul>
    </div>
  </div>
 
</template>

<script>
import { auth, tasksCollection} from "../plugins/firebase";
import * as fb from "@/plugins/firebase";
export default {
  data() {
    return {
      myBooks: [],
    };
  },
  mounted() {
    let user = auth.currentUser.uid;
    this.getMyBooks(user);
    console.log(this.myBooks)
  },
  methods: {
    getMyBooks(uid) {
      this.myBooks = []
      tasksCollection
        .where("uid", "==", uid)
        .get()
        .then((livros) => {
          for (const livro of livros.docs) {
            this.myBooks.push({
              id: livro.id,
              nomeLivro: livro.data().nomeLivro,
              autor: livro.data().autor,
              editora: livro.data().editora,
              numpag: livro.data().numpag,
              descricao: livro.data().descricao,
              imagem: livro.data().imagem,
              condicao: livro.data().condicao,
            });
          }
        });
    },
    async deleteLivro(livro){
      console.log(livro)
      await fb.tasksCollection.doc(livro).delete()
      this.getMyBooks(auth.currentUser.uid)
    }
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
  max-width: 250px;
  min-height: 330px;
  max-height: 330px;
  background-color: red;
  border-radius: 10px;
  margin-left: 20px;
  margin-right: 20px;
}

.editbook{
  width: 40px;
  height: 40px;
  margin-top: 20px;
  cursor: pointer;
}

.lixeira{
  cursor: pointer;
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

.dadosmeuslivros{
  list-style: none;
  margin-top: 80px;
  margin-left: 100px;
}
</style>