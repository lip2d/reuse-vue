<template>
  <body>
    <div>
      <div class="imguser3BookRegister">
        <div class="aaa2BookRegister">
          <img class="ico2BookRegister" :src="imagem" alt="" />
        </div>
        <article class="tttBookRegister">
          Tamanho da imagem: 1MB <br />
          Extensão de arquivo: JPEG, PNG
          <input v-model="imagem" />
        </article>
      </div>
    </div>
    <form class="formBookRegister">
      <input v-model="nomeLivro" class="input1BookRegister" />
      <br />
      <input v-model="autor" class="input1BookRegister" />
      <br />
      <input v-model="editora" class="input1BookRegister" />
      <br />
      <input v-model="numpag" type="number" class="input1BookRegister" />
      <br />
      <input v-model="descricao" class="input1BookRegister" />
      <select
        v-model="condicao"
        class="input1BookRegister condicaolivro"
        name="condicao"
        id="condicao"
      >
        <option value="Estado Bom">Estado bom</option>
        <option value="Estado Mediano">Estado mediano</option>
        <option value="Estado Ruim">Estado ruim</option>
      </select>
    </form>
    <ul class="dadosBookRegister">
      <li class="dado1BookRegister">Nome do Livro:</li>
      <li class="dado1BookRegister">Autor:</li>
      <li class="dado1BookRegister">Editora:</li>
      <li class="dado1BookRegister">Número de páginas:</li>
      <li class="dado1BookRegister">Sinopse:</li>
      <li class="dado1BookRegister">Condição Livro:</li>
      <li class="salvarBookRegister" @click="adicionarlivro">Salvar</li>
    </ul>
  </body>
</template>

<script>
import * as fb from "@/plugins/firebase";

export default {
  data() {
    return {
      uid: "",
      nomeLivro: "",
      autor: "",
      editora: "",
      numpag: "",
      descricao: "",
      imagem: "",
      condicao: "",
    };
  },
  methods: {
    async adicionarlivro() {
      this.uid = fb.auth.currentUser.uid;
      await fb.tasksCollection.add({
        uid: this.uid,
        nomeLivro: this.nomeLivro,
        autor: this.autor,
        editora: this.editora,
        numpag: this.numpag,
        descricao: this.descricao,
        imagem: this.imagem,
        condicao: this.condicao,
        disponibilidade: "Disponível",
      });
    },
    toBookRegister() {
      this.$router.push({ path: "/bookregister" });
    },
    toChangePassword() {
      this.$router.push({ path: "/changepassword" });
    },
    toHomePage() {
      this.$router.push({ path: "/home" });
    },
    async toLogin() {
      await fb.auth.signOut();
      this.$router.push({ path: "/login" });
    },
    toProfile() {
      this.$router.push({ path: "/profile" });
    },
    toMyBooks() {
      this.$router.push({ name: "mybooks" });
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

body {
  background-color: #fdf7e6;
}

.formBookRegister {
  top: 306px;
  margin-left: 200px;
  position: absolute;
}

.input1BookRegister {
  background-color: #fff9e8;
  border: 1px solid #9e6942;
  border-radius: 50px;
  width: 400px;
  height: 53px;
  font-family: "Montserrat";
  box-shadow: 0px 2px 5px#9E6942;
  color: #85904e;
  margin-left: 640px;
  margin-bottom: 30px;
  padding-left: 1%;
  font-size: 25px;
}

.condicaolivro {
  width: 420px;
}

.dadosBookRegister {
  font-family: Montserrat;
  font-size: 30px;
  font-weight: bold;
  margin-left: 440px;
  list-style: none;
  margin-top: 110px;
}

.dado1BookRegister {
  padding-bottom: 55px;
}

.salvarBookRegister {
  background-color: #bfc297;
  border: 1px solid #85904e;
  border-radius: 50px;
  width: 200px;
  height: 53px;
  text-align: center;
  box-shadow: 0px 2px 5px#85904E;
  cursor: pointer;
  margin-left: 610px;
  margin-top: 15px;
  color: #3a2718;
  display: flex;
  align-items: center;
  justify-content: center;
}

.imguser3BookRegister {
  width: 200px;
  height: 200px;
  position: absolute;
  margin-left: 1450px;
}

.ico2BookRegister {
  width: 200px;
  height: 300px;
  margin-top: 25px;
  margin-left: 70px;
}

.tttBookRegister {
  font-size: 32px;
  font-family: Montserrat;
  margin-top: 50px;
  width: 360px;
}
</style>
