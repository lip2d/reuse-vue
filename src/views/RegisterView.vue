<template>
  <body>
    <div class="container"></div>
        <div class="cobertura1">
            <img src="../assets/images/logo1.png" class="img" alt="imagem"/>
        </div>
        <div class="cobertura2">
            <form class="form form1">
                <h1>CADASTRAR</h1>
                <!-- <input class="input1 eo2" placeholder="Nome Completo" /> -->
                <br>
                <input class="input1 eo2" placeholder="E-mail" v-model="novoUsuario.email" />
                <input class="input1 eo2" type="password" placeholder="Senha" v-model="novoUsuario.senha" />
                <input class="input1 eo2" placeholder="Idade" v-model="novoUsuario.idade"/>
                <br>
                <span>{{ errorMessage }}</span>
                <br>
                <br> <br> <br>
                <button class="cadastrar1" type="button" @click="submitCreate">Cadastre-se</button>
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
        }
    },
    methods: {
        async submitCreate() {
            if (!(this.novoUsuario.idade < 16)) {
                this.errorMessage = ""
                try {
                    await createUserWithEmailAndPassword(auth, this.novoUsuario.email, this.novoUsuario.senha);
                    this.createProfile();
                    this.$router.push({ name: "home" });
                } catch(err) {
                    console.error(err);
                }
            } else {
                this.errorMessage = "É necessário ter mais de 16 anos para criar uma conta!"
            }
        },
        async createProfile(){
            const uid = auth.currentUser.uid;

            await addDoc(profileCollection, {
                owner: uid
            });
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');

body {
    margin: 0;
    padding: 0;
}

.container {
    position: relative;
}

.cobertura1 {
    background-color: #bfc297;
    width: 50%;
    height: 100%;
    position: fixed;
}

.cobertura2 {
    background-color: #fff9e8;
    width: 50%;
    height: 100%;
    position: fixed;
    right: 0;
}

.img {
    position: fixed;
    width: 604px;
    height: 604px;
    bottom: 28%;
    left: 8%;
}

form {
    font-family: "Montserrat";
    color: #9E6942;
    text-align: center;
}

.form1 {
    width: 70%;
    height: 70%;
    margin-right: 300px;
    margin-top: 150px;
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
    margin-left: 0;
}

.eo2 {
    width: 440px;
}

.eo4 {
    width: 130px;
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

.cadastrar {
    font-family: "Montserrat";
    font-size: 30px;
    color: #85904E;
}
</style>