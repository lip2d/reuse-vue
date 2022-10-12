<template>
  <div>
    <div class="livrosombra"></div>
    <div class="livro"></div>
    <article>
      <ul class="descLivro">
        <li class="itemDescLivro">Nome:</li>
        <li class="itemDescLivro">Autor:</li>
        <li class="itemDescLivro">Editora:</li>
        <li class="itemDescLivro">Número de páginas:</li>

        <button class="btnChat">Chamar Dono</button>
      </ul>
    </article>
    <div class="line"></div>
    <aside class="resumoLivro">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </aside>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap");

* {
  margin: 0;
  padding: 0;
  border: 0;
}

.livrosombra {
  width: 300px;
  height: 400px;
  background-color: #85904e;
  position: relative;
  top: 210px;
  left: 170px;
  border-radius: 10px;
}

.livro {
  width: 300px;
  height: 400px;
  background-color: black;
  position: absolute;
  top: 180px;
  left: 200px;
  border-radius: 10px;
}

.descLivro {
  margin-left: 600px;
  font-size: 40px;
  font-family: "Montserrat";
  list-style: none;
  margin-top: -190px;
}

.itemDescLivro {
  margin-bottom: 20px;
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
</style>