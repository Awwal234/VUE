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
  background: linear-gradient(
    to right,
    rgb(121, 17, 196),
    rgb(93, 4, 156),
    rgb(121, 17, 196)
  );
  color: white;
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
  color: #fff;
}
.signup {
  background: transparent;
  color: white;
  font-size: 15px;
  font-family: sans-serif;
  border: 0px;
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 30px;
  margin-right: 60px;
  border: 2px solid #fff;
}

@media only screen and (max-width: 768px) {
  .listy > li {
    display: none;
  }
}
</style>
