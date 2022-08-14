<!-- eslint-disable prettier/prettier -->
<template>
  <div class="m1">
    <div class="hero1">
      <div class="hero1-text-intro">
        Hello, Welcome To the Zedd. 
        Let's Help you Grow your Business.
      </div>
      <div class="hero1-text">
        Let's get your business started
      </div>
      <div>
        <button class="btn-get-started">Let's get you started</button>
      </div>
    </div>
    <!---->
    <div class="hero2">
      <img src="/illustrate.png" class="img-size">
    </div>
  </div>
</template>

<style scoped>
.m1 {
  padding: 40px;
  color: #000;
  margin-top: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.hero1 {
  width: 50%;
}
.hero1-text-intro {
  font-size: 40px;
  font-weight: bold;
  font-family: sans-serif;
}
.hero1-text {
  font-size: 13px;
  font-weight: 200;
  font-family: Courier New;
  margin-top: 10px;
  word-spacing: 8px;
}

.hero2 {
  width:50%;
}
.img-size {
  width: 100%;
}
.btn-get-started {
  background: indigo;
  color: #fff;
  font-family: 'Courier New';
  font-weight: 700;
  border: 0px;
  margin-top: 10px;
  padding-right:20px;
  padding-left:20px;
  padding-top:15px;
  padding-bottom:15px;
  font-size: 15px;
  border-radius: 25px;
  box-shadow: 0 0 2px 1px gray;
}
.btn-get-started:hover{
  background: rgb(141, 41, 212);
  cursor: pointer;
}

@media only screen and (max-width: 767px) {
  .m1 {
    padding: 40px;
    color: #000;
    margin-top: 150px;
    display: block;
    justify-content: baseline;
    align-items: center;
  }
  .hero1 {
    width: 90%;
  }
  .hero1-text-intro {
    font-size: 30px;
    font-weight: bold;
    font-family: sans-serif;
  }
  .hero1-text {
    font-size: 13px;
    font-weight: 200;
    font-family: Courier New;
    margin-top: 10px;
    word-spacing: 8px;
  }
  .hero2 {
    width:100%;
    margin-top: 8px;
  }
  .img-size {
    width: 100%;
  }
  .btn-get-started {
    background: indigo;
    color: #fff;
    font-family: 'Courier New';
    font-weight: 700;
    border: 0px;
    margin-top: 10px;
    padding-right:20px;
    padding-left:20px;
    padding-top:15px;
    padding-bottom:15px;
    font-size: 12px;
    border-radius: 25px;
    box-shadow: 0 0 2px 1px gray;
  }
}
</style>
