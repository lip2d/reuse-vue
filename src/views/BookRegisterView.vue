<template>
      <body>
        <div class="container">
            <nav class="header">
                <img src="logo.png" class="img" alt="imagem">

                <input class="pesquisa" placeholder="Busque aqui" />
                <ul class="eu1">
                    <li>HOME</li>
                    <li class="li2">CHAT</li>
                    <li>ATENDIMENTO</li>
                </ul>
                <div class="perfil">
                    <img src="user-icon.png" class="usericon" alt="user">
                </div>
            </nav>
        </div>

        <div class="profile">
            <div class="imguser">
                <img class="ico" src="ico.png" alt="">
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
                        <img class="ico2" :src="imagem" alt="">
                    </div>
                    <input type="file" name="arquivos" class="oo2" accept="image/png, image/jpeg" multiple />
                    <article class="ttt">Tamanho da imagem: 1MB <br> Extensão de arquivo: JPEG, PNG
                        <input v-model="imagem" />
                    </article>
                </div>
            </div>
            <ul class="lo1">
                <li class="lo2">Nome</li>
                <li class="lo3">Minha Conta</li>
                <li class="lo4 "><a href="user.html">Dados</a></li>
                <li class="lo5 "><a href="recsenha.html">Trocar Senha</a></li>
                <li class="lo6">Livros</li>
                <li class="lo7 dd1">Cadastrar</li>
                <li class="lo8">Favoritos</li>
                <li class="lo9">Ver Trocas</li>
                <li class="lo10"><a href="../login/login.html">Sair</a></li>
            </ul>

        </div>
        <form class="form">
            <input v-model="nomeLivro" class="input1"/>
            <br>
            <input v-model="autor" class="input1" />
            <br>
            <input v-model="editora" class="input1" />
            <br>
            <input v-model="sinopse" class="input1 ff2" />
            <br>
            <input v-model="descricao" class="input1 ff2" />
        </form>
        <ul class="dados">
            <li class="dado1">Nome do Livro:</li>
            <li class="dado1">Autor:</li>
            <li class="dado1">Editora:</li>
            <li class="dado1 ff1">Sinopse:</li>
            <li class="dado1 ff1">Descrição:</li>
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
            imagem: ""
        }
    }, 
    methods:{
        async adicionarlivro() {
            this.uid = fb.auth.currentUser.uid;
            await fb.tasksCollection.add({
                uid: this.uid,
                nomeLivro: this.nomeLivro,
                autor: this.autor,
                editora: this.editora,
                sinopse: this.sinopse,
                descricao: this.descricao,
                imagem: this.imagem
            })
        },
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');

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
    color: #3A2718;
}


.pesquisa {
    background-color: #FFF9E8;
    border: 1px solid #9E6942;
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
    color: #FFF9E8;
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
    color: #3A2718;
}

.au2 {
    font-size: 45px;
    color: #3A2718;
    font-weight: bold;
}

.au3 {
    font-size: 40px;
    padding-top: 2%;
    color: #3A2718;
    font-weight: bold;
}

.lo1 {
    font-family: Montserrat;
    color: #3A2718;
    margin-top: 2%;
    margin-left: 5%;
    font-weight: bold;
    font-size: 30px;
}

.lo2 {
    margin-left: 2.5%;
    font-weight: bold;
    position: absolute;
    list-style: none;
}

.lo3 {
    margin-top: 5%;
    margin-left: 0;
    position: absolute;
}

.lo4 {
    margin-left: 2.5%;
    position: absolute;
    margin-top: 9%;
    list-style: none;
}

.lo5 {
    margin-top: 12%;
    margin-left: 0;
    position: absolute;
    list-style: none;
}

.lo6 {
    margin-top: 17%;
    position: absolute;
}

.lo7 {
    margin-top: 21%;
    margin-left: 1.3%;
    position: absolute;
    list-style: none;
}

.lo8 {
    margin-top: 24%;
    margin-left: 1.5%;
    position: absolute;
    list-style: none;
}

.lo9 {
    margin-top: 27%;
    margin-left: 1%;
    position: absolute;
    list-style: none;
}

.lo10 {
    margin-top: 30.5%;
    margin-left: 3.4%;
    position: absolute;
    list-style: none;
}

.linha1 {
    width: 77%;
    height: 1px;
    background-color: #85904E;
    margin-top: 50px;
    position: absolute;
}

.linha2 {
    width: 1px;
    height: 620px;
    background-color: #85904E;
    margin-top: 100px;
    position: absolute;
}

.linha3 {
    width: 1px;
    height: 620px;
    background-color: #85904E;
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
    background-color: #FFF9E8;
    border: 1px solid #9E6942;
    border-radius: 50px;
    width: 500px;
    height: 53px;
    font-family: "Montserrat";
    box-shadow: 0px 2px 5px#9E6942;
    color: #85904E;
    margin-bottom: 30px;
    padding-left: 2%;
    font-size: 30px;
}

.input1 {
    background-color: #FFF9E8;
    border: 1px solid #9E6942;
    border-radius: 50px;
    width: 400px;
    height: 53px;
    font-family: "Montserrat";
    box-shadow: 0px 2px 5px#9E6942;
    color: #85904E;
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
    border: 1px solid #85904E;
    border-radius: 50px;
    width: 200px;
    height: 53px;
    text-align: center;
    box-shadow: 0px 2px 5px#85904E;
    cursor: pointer;
    margin-left: 605px;
    margin-top: 30px;
    color: #3A2718;
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
    border: 1px solid #85904E;
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
    width: 360px
}

.dd1 {
    color: #D16014;
}

.ff1 {
    margin-top: 26px;
}

.ff2 {
    height: 100px;
}
</style>