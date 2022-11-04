<template>
  <div style="display: flex">
    <div class="meuslivros">
      <div v-for="(livro, index) in myBooks" :key="index" class="mybooks">
        <img
          :src="livro.imagem"
          alt="Livro Imagem"
          style="width: 100%; height: 100%; border-radius: 10px"
        />
        <div class="icons">
          <div>
            <img
              src="../assets/images/edit-book.png"
              class="editbook"
              @click="livroEditavel = livro"
              alt=""
            />
          </div>
          <div>
            <img
              src="../assets/images/lixeira.png"
              @click="deleteLivro(livro.id)"
              class="lixeira"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div>
      <ul class="dadosmeuslivros" v-if="Object.keys(livroEditavel).length">
        <li class="d">Nome do Livro:</li>
        <input class="inputEditBook" v-model="livroEditavel.nomeLivro" />

        <li class="d">Autor:</li>
        <input class="inputEditBook" v-model="livroEditavel.autor" />

        <li class="d">Editora:</li>
        <input class="inputEditBook" v-model="livroEditavel.editora" />

        <li class="d">Número de páginas:</li>
        <input
          class="inputEditBook"
          v-model="livroEditavel.numpag"
          type="number"
        />

        <li class="d">Sinopse:</li>
        <input class="inputEditBook" v-model="livroEditavel.descricao" />

        <li class="d">Condição Livro</li>
        <select
          class="inputEditBook"
          v-model="livroEditavel.condicao"
          name="condicao"
          id="condicao"
        >
          <option value="Estado Bom">Estado bom</option>
          <option value="Estado Mediano">Estado mediano</option>
          <option value="Estado Ruim">Estado ruim</option>
        </select>
        <li class="d">Disponibilidade Livro</li>

        <select
          v-model="livroEditavel.disponibilidade"
          name="disponibilidade"
          id="disponibilidade"
          class="inputEditBook"
        >
          <option value="Disponível">Disponível</option>
          <option value="Indisponível">Indisponível</option>
        </select>
        <li class="d" @click="editarLivro(livroEditavel.id)">Salvar</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { auth, tasksCollection } from "../plugins/firebase";
import * as fb from "@/plugins/firebase";
export default {
  data() {
    return {
      myBooks: [],
      livroEditavel: {},
    };
  },
  mounted() {
    let user = auth.currentUser.uid;
    this.getMyBooks(user);
    console.log(this.myBooks);
  },
  methods: {
    getMyBooks(uid) {
      this.myBooks = [];
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
              disponibilidade: livro.data().disponibilidade,
            });
          }
        });
    },
    async editarLivro(id) {
      await fb.tasksCollection.doc(id).update(this.livroEditavel);
    },
    async deleteLivro(livro) {
      console.log(livro);
      await fb.tasksCollection.doc(livro).delete();
      this.getMyBooks(auth.currentUser.uid);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap");

.meuslivros {
  padding: 130px 0;
  display: flex;
  max-width: 950px;
  margin-left: 385px;
  height: 410px;
  margin-top: 50px;
  overflow-x: scroll;
}

.inputEditBook {
}

.mybooks {
  min-width: 250px;
  max-width: 250px;
  min-height: 330px;
  max-height: 330px;
  background-color: red;
  border-radius: 10px;
  margin-left: 20px;
  margin-right: 20px;
}

.editbook {
  width: 40px;
  height: 40px;
  margin-top: 20px;
  cursor: pointer;
}

.lixeira {
  cursor: pointer;
  width: 40px;
  height: 40px;
  margin-top: 20px;
}

.icons {
  bottom: 100px;
  width: 300px;
  display: flex;
  gap: 30px;
  margin-left: 75px;
}

.dadosmeuslivros {
  list-style: none;
  margin-top: 150px;
  margin-left: 100px;
  position: absolute;
  right: 0;
  margin-right: 150px;
}
</style>