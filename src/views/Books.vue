<template>
  <div>
    <div class="livrosombra"></div>
    <div class="livro">
      <img
        :src="product.imagem"
        alt=""
        style="width: 100%; height: 100%; border-radius: 10px"
      />
    </div>
    <img
      src="../assets/images/heart.png"
      class="hearticon"
      alt=""
      @click="favoritar"
    />

    <article>
      <ul class="descLivro">
        <li class="itemDescLivro">Nome: {{ product.nomeLivro }}</li>
        <li class="itemDescLivro">Autor: {{ product.autor }}</li>
        <li class="itemDescLivro">Editora: {{ product.editora }}</li>
        <li class="itemDescLivro">Número de páginas: {{ product.numpag }}</li>
        <li class="itemDescLivro">Condição Livro: {{ product.condicao }}</li>

        <button class="btnChat">Chamar Dono</button>
      </ul>
    </article>
    <div class="line"></div>
    <aside class="resumoLivro">
      {{ product.descricao }}
    </aside>
  </div>
</template>

<script>
import { mapState } from "vuex";
import * as fb from "@/plugins/firebase";

export default {
  computed: {
    ...mapState(["product"]),
  },

  methods: {
    async favoritar() {
      const uid = fb.auth.currentUser.uid;
      const idProduto = this.product.id;

      let favExiste = [];

      const docOwner = await fb.favCollection.where("owner", "==", uid);
      docOwner
        .where("idProduto", "==", idProduto)
        .get()
        .then((docs) => {
          docs.forEach((doc) => {
            favExiste.push(doc.data());
          });
        });

      if (favExiste) {
        favExiste.forEach((doc) => {
          doc.delete();
        });
      } else {
        await fb.favCollection.add({
          owner: uid,
          idProduto,
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
}

.livrosombra {
  width: 260px;
  height: 400px;
  background-color: #85904e;
  position: relative;
  top: 210px;
  left: 170px;
  border-radius: 10px;
}

.livro {
  width: 260;
  height: 400px;
  background-color: black;
  position: absolute;
  top: 180px;
  left: 200px;
  border-radius: 10px;
}

.descLivro {
  margin-left: 550px;
  font-family: "Montserrat";
  list-style: none;
  margin-top: -220px;
}

.itemDescLivro {
  margin-bottom: 20px;
  font-size: 35px;
}

.btnChat {
  font-size: 40px;
  margin-top: 20px;
  width: 310px;
  height: 60px;
  border-radius: 15px;
  border: 1px solid #3a2718;
  color: #3a2718;
  background-color: #bfc297;
  font-family: "Montserrat";
  cursor: pointer;
}

.line {
  width: 90%;
  height: 1px;
  background-color: #85904e;
  margin: 80px auto;
}

.resumoLivro {
  font-size: 25px;
  font-family: "Montserrat";
  width: 85%;
  margin: -40px auto;
}

.hearticon {
  width: 80px;
  position: absolute;
  margin-left: 1650px;
  top: 520px;
  cursor: pointer;
}
</style>
