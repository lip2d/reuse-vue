<template>
  <body>
    <div class="profile">
      <div class="imguser">
        <img class="ico" />
      </div>
      <ul class="au1">
        <li class="au2">Livros</li>
        <li class="au3">Dê aos seus livros um recomeço</li>
        <div class="linha1"></div>
        <div class="linha2"></div>
        <div class="linha3"></div>
      </ul>
      <div>
        <div class="imguser3">
          <div class="aaa2">
            <img class="ico2" :src="imagem" alt="" />
          </div>
          <input
            type="file"
            name="arquivos"
            class="oo2"
            accept="image/png, image/jpeg"
            multiple
          />
          <article class="ttt">
            Tamanho da imagem: 1MB <br />
            Extensão de arquivo: JPEG, PNG
            <input v-model="imagem" />
          </article>
        </div>
      </div>
      <ul class="lo1">
        <li class="lo2">Nome</li>
        <li class="lo3">Minha Conta</li>
        <li class="lo4" @click="toProfile">Dados</li>
        <li class="lo5" @click="toChangePassword">Trocar Senha</li>
        <li class="lo6">Livros</li>
        <li class="lo7 dd1" @click="toBookRegister">Cadastrar</li>
        <li class="lo8" @click="toMyBooks">Meus Livros</li>
        <li class="lo9">Favoritos</li>
        <li class="lo10" @click="toLogin">Sair</li>
      </ul>
    </div>
    <form class="form">
      <input v-model="nomeLivro" class="input1" />
      <br />
      <input v-model="autor" class="input1" />
      <br />
      <input v-model="editora" class="input1" />
      <br />
      <input v-model="numpag" class="input1" />
      <br />
      <input v-model="descricao" class="input1" />
      <select v-model="condicao" class="input1" name="condicao" id="condicao">
        <option value="Estado Bom">Estado bom</option>
        <option value="Estadp Mediano">Estado mediano</option>
        <option value="Estado Ruim">Estado ruim</option>
      </select>
    </form>
    <ul class="dados">
      <li class="dado1">Nome do Livro:</li>
      <li class="dado1">Autor:</li>
      <li class="dado1">Editora:</li>
      <li class="dado1">Número de páginas:</li>
      <li class="dado1">Sinopse:</li>
      <li class="dado1">Condição Livro:</li>
      <li class="salvar" @click="adicionarlivro">Salvar</li>
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

.profile {
  position: relative;
}

.imguser {
  margin-top: 9%;
  margin-left: 5%;
  border-radius: 100%;
  width: 200px;
  height: 200px;
  background-color: #ceb195;
  position: absolute;
}

.ico {
  width: 120px;
  height: 120px;
  margin-top: 35px;
  margin-left: 40px;
}

.au1 {
  font-family: Montserrat;
  padding-top: 11%;
  padding-left: 20%;
  list-style: none;
  color: #3a2718;
}

.au2 {
  font-size: 45px;
  color: #3a2718;
  font-weight: bold;
}

.au3 {
  font-size: 40px;
  padding-top: 2%;
  color: #3a2718;
  font-weight: bold;
}

.linha1 {
  width: 77%;
  height: 1px;
  background-color: #85904e;
  margin-top: 50px;
  position: absolute;
}

.linha2 {
  width: 1px;
  height: 620px;
  background-color: #85904e;
  margin-top: 100px;
  position: absolute;
}

.linha3 {
  width: 1px;
  height: 620px;
  background-color: #85904e;
  margin-top: 100px;
  position: absolute;
  margin-left: 950px;
}

.form {
  margin-left: 200px;
  margin-top: 50px;
  position: absolute;
}

.input1 {
  background-color: #fff9e8;
  border: 1px solid #9e6942;
  border-radius: 50px;
  width: 400px;
  height: 53px;
  font-family: "Montserrat";
  box-shadow: 0px 2px 5px#9E6942;
  color: #85904e;
  margin-left: 320px;
  margin-bottom: 30px;
  padding-left: 2%;
  font-size: 25px;
}

.dados {
  font-family: Montserrat;
  font-size: 30px;
  font-weight: bold;
  margin-left: 440px;
  list-style: none;
  margin-top: 90px;
}

.dado1 {
  padding-bottom: 50px;
}

.salvar {
  background-color: #bfc297;
  border: 1px solid #85904e;
  border-radius: 50px;
  width: 200px;
  height: 53px;
  text-align: center;
  box-shadow: 0px 2px 5px#85904E;
  cursor: pointer;
  margin-left: 605px;
  margin-top: 30px;
  color: #3a2718;
}

.imguser3 {
  width: 200px;
  height: 200px;
  position: absolute;
  margin-top: 100px;
  margin-left: 1450px;
}

.ico2 {
  width: 120px;
  height: 120px;
  margin-top: 35px;
  margin-left: 105px;
}

.ttt {
  font-size: 32px;
  font-family: Montserrat;
  margin-top: 100px;
  width: 360px;
}
</style>