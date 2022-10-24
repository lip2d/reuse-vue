<template>
  <body>
    <div>
      <div class="imguser3Profile">
        <div class="aaa2Profile">
          <img class="ico2Profile" :src="imagem" alt="" />
        </div>
        <article class="tttProfile">
          <strong>Alterar foto de perfil</strong> <br />
          Selecione uma imagem
          <input class="barpic" v-model="imagem" />
        </article>
      </div>
    </div>
    <form class="formData">
      <input class="inputData" v-model="nome" />
      <br />
      <input class="inputData" v-model="email" />
      <br />
      <input class="inputData" v-model="telefone" />
      <br />
      <input class="inputData" v-model="nascimento" />
      <br />
      <input class="inputData" v-model="endereço" />
      <br />
      <input class="inputData" v-model="cep" />
      <br />
    </form>
    <ul class="dadosData">
      <li class="dado1Data">Nome:</li>
      <li class="dado1Data">E-mail:</li>
      <li class="dado1Data">Telefone:</li>
      <li class="dado1Data">Nascimento:</li>
      <li class="dado1Data">Endereço:</li>
      <li class="dado1Data">CEP:</li>
      <li class="salvarData" @click="salvarPerfil">Salvar</li>
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
      imagemPerfil: "",
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
      this.imagemPerfil = perfil.data().imagemPerfil;
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
          imagemPerfil: this.imagemPerfil,
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
          imagemPerfil: this.imagemPerfil,
        });
      }
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
.formData {
  top: 305px;
  margin-left: 200px;
  position: absolute;
}

.inputData {
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

.dadosData {
  font-family: Montserrat;
  font-size: 30px;
  font-weight: bold;
  margin-left: 440px;
  list-style: none;
  margin-top: 110px;
}

.dado1Data {
  padding-bottom: 55px;
}

.salvarData {
  background-color: #bfc297;
  border: 1px solid #85904e;
  border-radius: 50px;
  width: 200px;
  height: 53px;
  text-align: center;
  box-shadow: 0px 2px 5px#85904E;
  cursor: pointer;
  margin-left: 626px;
  margin-top: 8px;
  color: #3a2718;
  display: flex;
  align-items: center;
  justify-content: center;
}

.imguser3Profile {
  width: 200px;
  height: 200px;
  position: absolute;
  margin-left: 1450px;
}

.ico2Profile {
  width: 200px;
  height: 200px;
  margin-top: 1px;
  margin-left: 70px;
}

.tttProfile {
  font-size: 25px;
  font-family: Montserrat;
  width: 360px;
  text-align: center;
}

.barpic{
  margin-top: 25px;
}
</style>
