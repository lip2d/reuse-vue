<template>
  <body>
    <form class="form">
      <input class="input1" type="password" placeholder="" />
      <br />
      <input class="input1" type="password" />
      <br />
      <input class="input1" type="password" />
      <br />
    </form>
    <ul class="dados">
      <li class="dado1">Senha:</li>
      <li class="dado1">Senha nova:</li>
      <li class="dado1">Confirmar senha:</li>
      <li class="salvar">Salvar</li>
    </ul>
  </body>
</template>

<script>
import { auth } from "../plugins/firebase";

export default {
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
      await auth.signOut();
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
  top: 258px;
  margin-left: 200px;
  position: absolute;
}

.input1 {
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
  margin-top: 110px;
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
  margin-left: 626px;
  margin-top: 8px;
  color: #3a2718;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
