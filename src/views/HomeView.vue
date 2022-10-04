<template>
    <div class="tudo">
        <div  class="texto-catalogo"></div>
        <div class="container-livros">
            <div class="livros"></div>
            <div class="livros"></div>
            <div class="livros"></div>
            <div class="livros"></div>
            <div class="livros"></div>
        </div>
    </div>
</template>

<script>
import * as fb from "@/plugins/firebase.js"

export default {
    data() {
        return {
            livros: []
        }
    },
    mounted(){
        this.getLivros()
        console.log(fb.auth.currentUser.uid)
    },
    methods: {
        async getLivros () {
            const logtasks = await fb.tasksCollection.get()
            for(
                const doc of logtasks.docs
            )
            this.livros.push({
                id: doc.id,
                nomeLivro: doc.data().nomeLivro,
                autor: doc.data().autor,
                editora: doc.data().editora,
                sinopse: doc.data().sinopse,
                descricao: doc.data().descricao,
                imagem: doc.data().imagem,
            })
            console.log(this.livros)
        },
    },
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
    margin-right: 40px;
}

.wall {
    display: flex;
    font-family: "Montserrat";
    justify-content: center;
}

.eo2 {
    position: relative;
}

.e1 {
    margin-top: 170px;
    margin-left: 25px;
    border-radius: 5px;
    width: 90px;
    height: 120px;
    background-color: #BD8761;
    position: absolute;

}

.e2 {
    margin-left: 50px;
    margin-top: 150px;
    width: 90px;
    height: 120px;
    background-color: #85904E;
    border-radius: 5px;
    position: absolute;

}

.txt {
    position: absolute;
    font-weight: bold;
    color: #3A2718;
    font-size: 30px;
    font-family: "Montserrat";
    top: 35%;
    left: 22%;

}

.e3 {
    margin-top: 520px;
    margin-left: 25px;
    border-radius: 5px;
    width: 90px;
    height: 120px;
    background-color: #BD8761;
    position: absolute;

}

.e4 {
    margin-left: 50px;
    margin-top: 500px;
    width: 90px;
    height: 120px;
    background-color: #85904E;
    border-radius: 5px;
    position: absolute;

}
.tudo {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 100px;
    overflow: hidden;
}
.texto-catalogo {
    margin-top: 150px;
    margin-left: 20px;
    height: 33px;
    width: 100%;
    background-color: #85904E;
    position: relative;
    right: 0;
}
.texto-catalogo::before {
    content: 'Livros:';
    background-color: #FFF9E8;
    border-radius: 0 10px 10px 0;
    font-size: 30px;
    padding-right: 2%;
}
.container-livros {
    height: 500px;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow-x: scroll;
}
.livros {
    margin: 0 50px;
    min-width: 350px;
    min-height: 450px;
    background-color: #393f1b;
}
</style>