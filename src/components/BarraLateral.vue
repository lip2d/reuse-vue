<template>
  <div class="profileData">
    <img class="imguserData" :src="imagemPerfil" />
    <ul class="au1Data">
      <li class="au2Data">Meu Perfil</li>
      <div class="linha1Data"></div>
      <div class="linha2Data"></div>
      <div class="linha3Data"></div>
    </ul>
    <div>
      <div class="imguser3Data"></div>
    </div>
    <ul class="lo1">
      <li class="lo2">{{ nome }}</li>
      <li class="lo2"><strong>Minha Conta</strong></li>
      <li class="lo2 lo3" @click="toProfile">Dados</li>
      <li class="lo2 lo3"><a @click="toChangePassword">Trocar Senha</a></li>
      <li class="lo2"><strong>Livros</strong></li>
      <li class="lo2 lo3"><a @click="toBookRegister">Cadastrar</a></li>
      <li class="lo2 lo3" @click="toMyBooks">Meus Livros</li>
      <li class="lo2 lo3" @click="toFavorites">Favoritos</li>
      <li class="lo2 lo3" @click="toLogin"><strong>Sair</strong></li>
    </ul>
  </div>
</template>

<script>
import * as fb from "@/plugins/firebase";
export default {
  data() {
    return {
      imagemPerfil: "",
      nome: "",
    };
  },
  async mounted() {
    this.uid = fb.auth.currentUser.uid;
    const userProfile = await fb.profileCollection
      .where("uid", "==", this.uid)
      .get();
    if (userProfile.docs.length > 0) {
      const perfil = userProfile.docs[0];
      this.imagemPerfil = perfil.data().imagemPerfil;
      this.nome = perfil.data().nome;
    }
  },
  methods: {
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
    toFavorites() {
      this.$router.push({ name: "favorites"});
    }
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap");

* {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 25px;
}

body {
  background-color: #fdf7e6;
}

.profileData {
  position: relative;
}

.imguserData {
  margin-top: 7%;
  margin-left: 4%;
  border-radius: 100%;
  width: 200px;
  height: 200px;
  background-color: #ceb195;
  position: absolute;
}

.au1Data {
  font-family: Montserrat;
  padding-top: 8%;
  padding-left: 20%;
  list-style: none;
  color: #3a2718;
}

.au2Data {
  font-size: 45px;
  color: #3a2718;
  font-weight: bold;
}

.au3Data {
  font-size: 40px;
  padding-top: 2%;
  color: #3a2718;
  font-weight: bold;
}

.lo1Data {
  font-family: Montserrat;
  color: #3a2718;
  margin-top: 2%;
  margin-left: 5%;
  font-weight: bold;
  font-size: 30px;
  cursor: pointer;
}

.linha1Data {
  width: 77%;
  height: 1px;
  background-color: #85904e;
  margin-top: 50px;
  position: absolute;
}

.linha2Data {
  width: 1px;
  height: 620px;
  background-color: #85904e;
  margin-top: 100px;
  position: absolute;
}

.linha3Data {
  width: 1px;
  height: 620px;
  background-color: #85904e;
  margin-top: 100px;
  position: absolute;
  margin-left: 950px;
}

.imguser3Data {
  width: 200px;
  height: 200px;
  position: absolute;
  margin-top: 100px;
  margin-left: 1450px;
}

.imguser3Profile {
  width: 200px;
  height: 200px;
  position: absolute;
  margin-top: 100px;
  margin-left: 1450px;
}

.ico2Profile {
  width: 200px;
  height: 200px;
  margin-top: 25px;
  margin-left: 70px;
}

.tttProfile {
  font-size: 32px;
  font-family: Montserrat;
  margin-top: 50px;
  width: 360px;
}

.lo1 {
  position: absolute;
  width: 350px;
  margin-top: 160px;
  text-align: center;
}

.lo2 {
  margin-bottom: 30px;
}

.lo3{
  cursor: pointer;
}
</style>
