<template>
  <div style="display: flex">
    <div class="meuslivros">
      <div class="mybooks">
        <img
          :src="livro.imagem"
          alt="Livro Imagem"
          style="width: 100%; height: 100%; border-radius: 10px"
        />
      </div>
    </div>
  </div>
</template>

<script>
import * as fb from "@/plugins/firebase";
import { mapState } from "vuex";

export default {
  mounted() {
    const uid = fb.auth.currentUser.uid;

    const favoritos = [];

    fb.favCollection
      .where("owner", "==", uid)
      .get()
      .then((docs) => {
        docs.forEach((element) => {
          favoritos.push(element.data());
        });
        console.log(favoritos);
      });
  },

  computed: {
    ...mapState(["product"]),
  },
};
</script>

<style>
</style>