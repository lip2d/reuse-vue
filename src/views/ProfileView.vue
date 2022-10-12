<template>
  <body>
    <div class="profile">
      <div class="imguser"></div>
      <ul class="au1">
        <li class="au2">Meu Perfil</li>
        <li class="au3">Gerenciar e proteger sua conta</li>
        <div class="linha1"></div>
        <div class="linha2"></div>
        <div class="linha3"></div>
      </ul>
      <div>
        <div class="imguser3">
          <div class="aaa2"></div>
        </div>
      </div>
      <ul class="lo1">
        <li class="lo2">{{ nome }}</li>
        <li class="lo3">Minha Conta</li>
        <li class="lo4 dd1" @click="toProfile">Dados</li>
        <li class="lo5"><a @click="toChangePassword">Trocar Senha</a></li>
        <li class="lo6">Livros</li>
        <li class="lo7"><a @click="toBookRegister">Cadastrar</a></li>
        <li class="lo8" @click="toMyBooks">Meus Livros</li>
        <li class="lo9">Favoritos</li>
        <li class="lo10" @click="toLogin">Sair</li>
      </ul>
    </div>
    <form class="form">
      <input class="input" v-model="nome" />
      <br />
      <input class="input" v-model="email" />
      <br />
      <input class="input" v-model="telefone" />
      <br />
      <input class="input" v-model="nascimento" />
      <br />
      <input class="input" v-model="endereço" />
      <br />
      <input class="input" v-model="cep" />
      <br />
    </form>
    <ul class="dados">
      <li class="dado1">Nome:</li>
      <li class="dado1">E-mail:</li>
      <li class="dado1">Telefone:</li>
      <li class="dado1">Nascimento:</li>
      <li class="dado1">Endereço:</li>
      <li class="dado1">CEP:</li>
      <li class="salvar" @click="salvarPerfil">Salvar</li>
    </ul>
  </body>
</template>

<script>
import * as fb from "@/plugins/firebase";

export default {
  data() {
    return {
      nome: "",
      email: "",
      telefone: "",
      nascimento: "",
      endereço: "",
      cep: "",
      uid: "",
      temPerfil: false,
    };
  },

  async mounted() {
    this.uid = fb.auth.currentUser.uid;
    const userProfile = await fb.profileCollection
      .where("uid", "==", this.uid)
      .get();
    if (userProfile.docs.length > 0) {
      this.temPerfil = true;
      const perfil = userProfile.docs[0];
      this.profileId = perfil.id;
      this.nome = perfil.data().nome;
      this.email = perfil.data().email;
      this.telefone = perfil.data().telefone;
      this.nascimento = perfil.data().nascimento;
      this.endereço = perfil.data().endereço;
      this.cep = perfil.data().cep;
    }
    console.log(this.nome);
    console.log(this.uid);
  },

  methods: {
    async salvarPerfil() {
      if (this.temPerfil) {
        await fb.profileCollection.doc(this.profileId).update({
          nome: this.nome,
          email: this.email,
          telefone: this.telefone,
          nascimento: this.nascimento,
          endereço: this.endereço,
          cep: this.cep,
        });
      } else {
        await fb.profileCollection.add({
          uid: this.uid,
          nome: this.nome,
          email: this.email,
          telefone: this.telefone,
          nascimento: this.nascimento,
          endereço: this.endereço,
          cep: this.cep,
        });
      }
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
  font-size: 25px;
}

body {
  background-color: #fdf7e6;
}

.profile {
  position: relative;
}

.imguser {
  margin-top: 9%;
  margin-left: 4%;
  border-radius: 100%;
  width: 200px;
  height: 200px;
  background-color: #ceb195;
  position: absolute;
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

.lo1 {
  font-family: Montserrat;
  color: #3a2718;
  margin-top: 2%;
  margin-left: 5%;
  font-weight: bold;
  font-size: 30px;
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
  margin-left: 550px;
  margin-bottom: 30px;
  padding-left: 2%;
  font-size: 30px;
}

.dados {
  font-family: Montserrat;
  font-size: 30px;
  font-weight: bold;
  margin-left: 440px;
  list-style: none;
  margin-top: 101px;
}

.dado1 {
  padding-bottom: 55px;
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
  margin-top: 175px;
  color: #3a2718;
  display: flex;
  align-items: center;
  justify-content: center;
}

.imguser3 {
  width: 200px;
  height: 200px;
  position: absolute;
  margin-top: 100px;
  margin-left: 1450px;
}
</style>