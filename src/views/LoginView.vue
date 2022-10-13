<template>
  <div>
      <div class="container"></div>
        <div class="cobertura1">
            <img src="../assets/images/logo1.png" class="img" alt="imagem"/>
        </div>
        <div class="cobertura2">
            <form>
                <h1>LOGIN</h1>
                <input class="input" placeholder="E-mail" v-model="user.email" />
                <br>
                <input class="input" type="password" placeholder="Senha" v-model="user.password" />
                <br> <br>
                <a href="recuperacaosenha.html" class="recsenha">Esqueceu a senha?</a>
                <br /> <br /> <br />
                <button class="entrar" type="button" @click="login">Entrar</button>
                <br> <br> <br>
                <div @click="toRegisterPage">Cadastrar</div>
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');

body {
    margin: 0;
    padding: 0;
    max-width: 100vw;
}

.container {
    position: relative;
}

.cobertura1 {
    background-color: #bfc297;
    width: 50%;
    height: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
}

.cobertura2 {
    width: 600px;
    height: 600px;
    position: absolute;
    right: 8%;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 25%;
}

.img {
    width: 220px;
    height: 80px;
}

form {
    position: fixed;
    font-family: "Montserrat";
    color: #9E6942;
    text-align: center;
}

.form1 {
    margin-right: 205px;
}

.input {
    background-color: #FFF9E8;
    border: 1px solid #9E6942;
    border-radius: 50px;
    width: 360px;
    height: 66px;
    font-size: 24px;
    margin-top: 34px;
    font-family: "Montserrat";
    box-shadow: 0px 2px 5px#9E6942;
    color: #85904E;
    padding-left: 15px;
    margin-left: 0;
}

.input1 {
    background-color: #FFF9E8;
    border: 1px solid #9E6942;
    border-radius: 50px;
    width: 210px;
    height: 50px;
    font-size: 24px;
    margin-top: 10px;
    font-family: "Montserrat";
    box-shadow: 0px 2px 5px#9E6942;
    color: #85904E;
    padding-left: 15px;
}

.eo2 {
    width: 440px;
}

.eo4 {
    width: 130px;
}

.entrar {
    background-color: #bfc297;
    border: 1px solid #85904E;
    border-radius: 50px;
    width: 173px;
    height: 50px;
    text-align: center;
    font-family: "Montserrat";
    font-size: 20px;
    box-shadow: 0px 2px 5px#85904E;
    cursor: pointer;
}

.cadastrar1 {
    background-color: #bfc297;
    border: 1px solid #85904E;
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
    color: #85904E;
    padding-right: 25%;
    text-decoration: none;
}

.cadastrar {
    font-family: "Montserrat";
    font-size: 30px;
    color: #85904E;
}
</style>