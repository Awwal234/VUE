<template>
  <div class="home">
    <header>
      <div class="logo">Logo</div>
      <div>
        <nav>
          <ul class="listy">
            <li><router-link to="/">home</router-link></li>
            <li><router-link to="/about">about</router-link></li>
            <li><router-link to="">privacy policy</router-link></li>
            <li><router-link to="">contact</router-link></li>
          </ul>
        </nav>
      </div>
      <div>
        <button class="signup" @click="signup()" id="signup">Sign Up</button>
      </div>
    </header>
    <HeroSection />
    <HireBoard />
  </div>
</template>

<script type="text/javascript">
import HeroSection from "@/components/HeroSection.vue";
import HireBoard from "@/components/HireBoard.vue";
export default {
  components: {
    HeroSection,
    HireBoard,
  },
  methods: {
    signup() {
      console.log("signup clicked!");
    },
  },
};
</script>

<style scoped>
header {
  background: white;
  color: black;
  display: flex;
  justify-content: space-between;
  padding: 30px;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 9999;
  margin-top: -2px;
}
.logo {
  font-weight: bold;
  font-family: sans-serif;
  font-size: 20px;
}
.listy {
  margin-right: 0px;
  padding: 0;
}
.listy > li {
  display: inline-flex;
  margin-right: 60px;
  font-family: sans-serif;
  font-size: 16px;
}
.listy > li > a:hover {
  text-decoration: underline;
  text-underline-offset: 41px;
  transition: 0.7s ease-in-out;
}
.listy > li > a {
  text-decoration: none;
  color: #000;
}
.signup {
  background: black;
  color: white;
  font-size: 15px;
  font-family: sans-serif;
  border: 0px;
  font-weight: bold;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 25px;
  padding-right: 25px;
  border-radius: 30px;
  margin-right: 60px;
  align-items: center;
  cursor: pointer;
}
.signup:hover {
  transition: 0.7s ease-in-out;
  color:#000;
  background: #fff;
  border: 2px solid #000;
}

@media only screen and (max-width: 768px) {
  .listy > li {
    display: none;
  }
}
</style>
