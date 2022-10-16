<template>
  <body>
    <div class="profileBookRegister">
      <div class="imguserBookRegister">
        <img class="icoBookRegister" />
      </div>
      <ul class="au1BookRegister">
        <li class="au2BookRegister">Livros</li>
        <li class="au3BookRegister">Dê aos seus livros um recomeço</li>
        <div class="linha1BookRegister"></div>
        <div class="linha2BookRegister"></div>
        <div class="linha3BookRegister"></div>
      </ul>
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
    <form class="formBookRegister">
      <input v-model="nomeLivro" class="input1BookRegister" />
      <br />
      <input v-model="autor" class="input1BookRegister" />
      <br />
      <input v-model="editora" class="input1BookRegister" />
      <br />
      <input v-model="numpag" class="input1BookRegister" />
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

.profileBookRegister {
  position: relative;
}

.imguserBookRegister {
  margin-top: 9%;
  margin-left: 5%;
  border-radius: 100%;
  width: 200px;
  height: 200px;
  background-color: #ceb195;
  position: absolute;
}

.icoBookRegister {
  width: 120px;
  height: 120px;
  margin-top: 35px;
  margin-left: 40px;
}

.au1BookRegister {
  font-family: Montserrat;
  padding-top: 11%;
  padding-left: 20%;
  list-style: none;
  color: #3a2718;
}

.au2BookRegister {
  font-size: 45px;
  color: #3a2718;
  font-weight: bold;
}

.au3BookRegister {
  font-size: 40px;
  padding-top: 2%;
  color: #3a2718;
  font-weight: bold;
}

.linha1BookRegister {
  width: 77%;
  height: 1px;
  background-color: #85904e;
  margin-top: 50px;
  position: absolute;
}

.linha2BookRegister {
  width: 1px;
  height: 620px;
  background-color: #85904e;
  margin-top: 100px;
  position: absolute;
}

.linha3BookRegister {
  width: 1px;
  height: 620px;
  background-color: #85904e;
  margin-top: 100px;
  position: absolute;
  margin-left: 950px;
}

.formBookRegister {
  margin-left: 200px;
  margin-top: 50px;
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
  margin-top: 95px;
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
  margin-top: 100px;
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