<template>
  <div class="hireboard">
    <center>
      <div class="hireboard-shape">
        <div class="board-text1">
          Transorm your business into the new game, hire and find your jobs
          faster than before.
        </div>
        <div class="board-text2">
          Just search, apply, and you are good to go.
        </div>
      </div>
    </center>
  </div>
</template>

<style scoped>
.hireboard {
  margin-top: 160px;
}
.hireboard-shape {
  width: 80%;
  border-radius: 40px;
  background: #fff;
  box-shadow: 0 0 1px 1px rgb(196, 194, 194);
  padding: 20px;
  text-align: left;
  font-family: Calibri;
}
.board-text1 {
  font-size: 27px;
  font-weight: 800;
}
.board-text2 {
  font-size: 17px;
  font-weight: 200;
  font-family: "Courier New";
}

@media only screen and (max-width: 767px) {
  .hireboard {
    margin-top: 90px;
  }
  .board-text1 {
    font-size: 20px;
    font-weight: 800;
  }
  .board-text2 {
    font-size: 14px;
    font-weight: 100;
    font-family: "Courier New";
  }
}
</style>
