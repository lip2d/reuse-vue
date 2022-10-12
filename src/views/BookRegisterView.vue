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
      <input v-model="sinopse" class="input1" />
      <br />
      <input v-model="descricao" class="input1" />
    </form>
    <ul class="dados">
      <li class="dado1">Nome do Livro:</li>
      <li class="dado1">Autor:</li>
      <li class="dado1">Editora:</li>
      <li class="dado1">Sinopse:</li>
      <li class="dado1">Descrição:</li>
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
      sinopse: "",
      descricao: "",
      imagem: "",
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
        sinopse: this.sinopse,
        descricao: this.descricao,
        imagem: this.imagem,
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

.container {
  margin: 0;
  padding: 0;
  background-color: #fdf7e6;
}

.header {
  width: 100%;
  height: 110px;
  background-color: #bfc297;
  position: fixed;
  display: flex;
}

.img {
  width: 100px;
  height: 85px;
  cursor: pointer;
  padding-top: 12px;
  padding-left: 13px;
}

a {
  text-decoration: none;
  color: #3a2718;
}

.pesquisa {
  background-color: #fff9e8;
  border: 1px solid #9e6942;
  border-radius: 50px;
  width: 65%;
  height: 59px;
  font-size: 24px;
  font-family: "Montserrat";
  box-shadow: 0px 2px 5px#9E6942;
  color: #393f1b;
  padding-left: 15px;
  margin-top: 23px;
  margin-left: 60px;
}

.bt1 {
  padding-left: 10%;
}

.eu1 {
  display: flex;
  list-style: none;
  font-family: "Montserrat";
  font-size: 26px;
  color: #fff9e8;
  cursor: pointer;
  padding: 40px 100px 38px 150px;
  font-weight: bold;
}

.li2 {
  padding-left: 70px;
  padding-right: 70px;
}

.usericon {
  width: 40px;
  height: 40px;
  cursor: pointer;
  padding-top: 32px;
  padding-right: 40px;
}

.wall {
  display: flex;
  font-family: "Montserrat";
  justify-content: center;
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

.input {
  background-color: #fff9e8;
  border: 1px solid #9e6942;
  border-radius: 50px;
  width: 500px;
  height: 53px;
  font-family: "Montserrat";
  box-shadow: 0px 2px 5px#9E6942;
  color: #85904e;
  margin-bottom: 30px;
  padding-left: 2%;
  font-size: 30px;
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
  margin-left: 650px;
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

.oo1 {
  background-color: #bfc297;
  background-color: #bfc297;
  border: 1px solid #85904e;
  border-radius: 5px;
  width: 360px;
  height: 80px;
  text-align: center;
  box-shadow: 0px 2px 5px#85904E;
  cursor: pointer;
  margin-top: 100px;
  font-size: 40px;
  font-family: Montserrat;
}

.oo2 {
  cursor: pointer;
  margin-top: 100px;
  font-size: 40px;
  font-family: Montserrat;
  width: 340px;
}

.ico1 {
  width: 120px;
  height: 120px;
  margin-top: 35px;
  margin-left: 40px;
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

.dd1 {
  color: #d16014;
}

.ff1 {
  margin-top: 26px;
}

.ff2 {
  height: 100px;
}
</style>