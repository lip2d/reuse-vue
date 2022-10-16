<template>
  <div>
    <div class="containerLogin"></div>
    <div class="cobertura1Login">
      <img src="../assets/images/logo1.png" class="imglogoLogin" alt="imagem" />
    </div>
    <div class="cobertura2Login">
      <form class="formLogin">
        <h1>LOGIN</h1>
        <input class="inputLogin" placeholder="E-mail" v-model="user.email" />
        <br />
        <input
          class="inputLogin"
          type="password"
          placeholder="Senha"
          v-model="user.password"
        />
        <br />
        <br />
        <a href="recuperacaosenha.html" class="recsenha">Esqueceu a senha?</a>
        <br />
        <br />
        <br />
        <button class="entrar" type="button" @click="login">Entrar</button>
        <br />
        <br />
        <br />
        <div class="toCadastrar" @click="toRegisterPage">Cadastrar</div>
      </form>
    </div>
  </div>
</template>

<script>
import * as fb from "@/plugins/firebase";
export default {
  data() {
    return {
      user: {},
      show: false,
      errorLogin: false,
      novaConta: false,
    };
  },
  methods: {
    reset() {
      this.user = {};
    },
    async login() {
      try {
        await fb.auth.signInWithEmailAndPassword(
          this.user.email,
          this.user.password
        );
        this.$router.push({ name: "home" });
      } catch (error) {
        const errorCode = error.code;
        switch (errorCode) {
          case "auth/wrong-password":
            this.errorLogin = true;
            break;
          case "auth/invalid-email":
            this.errorLogin = true;
            break;
          case "auth/user-not-found":
            this.novaConta = true;
            break;
          default:
            this.errorLogin = true;
            break;
        }
      }
    },
    async criarNovaConta() {
      this.novaConta = true;
      await fb.auth.createUserWithEmailAndPassword(
        this.user.email,
        this.user.password
      );
      this.login();
    },
    toRegisterPage() {
      this.$router.push({ path: "/register" });
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap");

body {
  margin: 0;
  padding: 0;
  max-width: 100vw;
}

.containerLogin {
  position: relative;
}

.cobertura1Login {
  background-color: #bfc297;
  width: 50%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cobertura2Login {
  width: 600px;
  height: 600px;
  position: absolute;
  right: 8%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 25%;
}

.imglogoLogin {
  margin-left: -80px;
  margin-top: -90px;
  width: 600px;
  height: 600px;
}

.formLogin {
  position: fixed;
  font-family: "Montserrat";
  color: #9e6942;
  text-align: center;
  margin-left: -30px;
}

.inputLogin {
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

.entrar {
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

.recsenha {
  font-family: "Montserrat";
  font-size: 24px;
  color: #85904e;
  padding-right: 25%;
  text-decoration: none;
}

.toCadastrar {
  font-size: 25px;
}
</style>