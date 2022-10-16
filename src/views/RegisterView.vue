<template>
  <body>
    <div class="containerRegister"></div>
    <div class="cobertura1Register">
      <img src="../assets/images/logo1.png" class="imgRegister" alt="imagem" />
    </div>
    <div class="cobertura2Register">
      <form class="formRegister formRegister1">
        <h1>CADASTRAR</h1>
        <!-- <input class="input1 eo2" placeholder="Nome Completo" /> -->
        <br />
        <input
          class="inputRegister"
          placeholder="E-mail"
          v-model="novoUsuario.email"
        />
        <input
          class="inputRegister"
          type="password"
          placeholder="Senha"
          v-model="novoUsuario.senha"
        />
        <input
          class="inputRegister"
          placeholder="Idade"
          v-model="novoUsuario.idade"
        />
        <br />
        <span>{{ errorMessage }}</span>
        <br />
        <br />
        <br />
        <br />
        <button class="cadastrarBTN" type="button" @click="submitCreate">
          Cadastre-se
        </button>
      </form>
    </div>
  </body>
</template>

<script>
import { auth, profileCollection } from "../plugins/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc } from "firebase/firestore";

export default {
  data() {
    return {
      novoUsuario: {},
      errorMessage: "",
    };
  },
  methods: {
    async submitCreate() {
      if (!(this.novoUsuario.idade < 16)) {
        this.errorMessage = "";
        try {
          await createUserWithEmailAndPassword(
            auth,
            this.novoUsuario.email,
            this.novoUsuario.senha
          );
          this.createProfile();
          this.$router.push({ name: "home" });
        } catch (err) {
          console.error(err);
        }
      } else {
        this.errorMessage =
          "É necessário ter mais de 16 anos para criar uma conta!";
      }
    },
    async createProfile() {
      const uid = auth.currentUser.uid;

      await addDoc(profileCollection, {
        owner: uid,
      });
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap");

body {
  margin: 0;
  padding: 0;
}

.containerRegister {
  position: relative;
}

.cobertura1Register {
  background-color: #bfc297;
  width: 50%;
  height: 100%;
  position: fixed;
}

.cobertura2Register {
  background-color: #fff9e8;
  width: 50%;
  height: 100%;
  position: fixed;
  right: 0;
}

.imgRegister {
  position: fixed;
  width: 600px;
  height: 600px;
  bottom: 28%;
  left: 8%;
}

.formRegister1 {
  font-family: "Montserrat";
  color: #9e6942;
  text-align: center;
  margin-left: 150px;
}

.formRegister {
  width: 70%;
  height: 70%;
  margin-right: 300px;
  margin-top: 300px;
}

.inputRegister {
  background-color: #fff9e8;
  border: 1px solid #9e6942;
  border-radius: 50px;
  width: 440px;
  height: 50px;
  font-size: 24px;
  margin-top: 30px;
  font-family: "Montserrat";
  box-shadow: 0px 2px 5px#9E6942;
  color: #85904e;
  padding-left: 15px;
}
.cadastrarBTN {
  background-color: #bfc297;
  border: 1px solid #85904e;
  border-radius: 50px;
  width: 173px;
  height: 50px;
  text-align: center;
  font-family: "Montserrat";
  font-size: 20px;
  box-shadow: 0px 2px 5px#85904E;
  cursor: pointer;
}
</style>