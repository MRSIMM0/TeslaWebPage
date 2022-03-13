<template>
  <v-content class="mt-10">
    <v-row justify="center">
      <div class="main">
        <h1 class=" display-1  font-weight-medium">Sign In</h1>

        <div class="inputMini">
          <label for="email">
            <small class="s-label"> Email Adress</small></label
          >
          <input type="text" id="email" class="inputF" />
        </div>

        <div class="inputMini">
          <label for="password">
            <small class="s-label"> Password</small></label
          >
          <input type="password" id="password" class="inputF" />
        </div>
        <v-btn rounded="true" color="primary">SIGN IN</v-btn>
        <v-btn rounded="true" flat="true" color="#f0f0f0">Cancel</v-btn>
        <div class="forgot">
          <small class="forgot-text">Forgot email?</small>
          <div class="spacer-forgot"></div>
          <small class="forgot-text">Forgot password?</small>
        </div>
        <div class="main-or ">
          <div class="line"></div>
          <h4 class="">OR</h4>
          <div class="line"></div>
        </div>
        <v-btn rounded="true" outlined="true" color="black"
          >Create Account</v-btn
        >
      </div>
    </v-row>
  </v-content>
</template>

<script>
export default {};
</script>

<style>
.main {
  font-family: "Gill Sans Extrabold", sans-serif;
  display: grid;
  grid-template-rows: 90px 90px 90px 55px 55px 55px 60px;
  height: 80vh;
  width: 22vw;
}

.inputF[type="text"],
[type="password"] {
  font-weight: 500;
  color: #686868;
  height: 40px;
  background-color: #f0f0f0;
  border: 0px solid #c9c9c9;
  border-radius: 20px;
  padding: 12px 20px;
  box-sizing: border-box;
  transition: 0.5s all;
}
.inputF:focus {
  border: 1px solid #c9c9c9;
  outline: none;

  transition: 0.5s all;
}
.s-label {
  font-weight: 600;
  padding-left: 15px;
  padding-bottom: 10px;
  font-size: 0.9em;
  color: #7e7e7e;
}

.inputMini {
  display: grid;
  grid-template-rows: 25px 50px;
}
.forgot {
  display: grid;
  justify-content: center;
  grid-template-columns: 35% 10% 35%;
}
.spacer-forgot {
  padding-top: 10px;
  height: 20px;
  border-left: 2px solid #a0a0a0;
}

.forgot-text {
  height: 20px;
  font-weight: 600;
  color: #7e7e7e;
  text-decoration: underline;
  text-decoration-color: #7e7e7e;
  transition: all 1s eager;
}

.forgot-text:hover {
  cursor: pointer;
  text-decoration-thickness: 2px;
  transition: all 1s eager;
}
.main-or {
  color: #b4b4b4;
  justify-content: center;
  display: grid;
  grid-template-columns: 160px 23px 150px;
}
.line {
  margin-left: 5px;
  margin-right: 5px;
  height: 10px;
  margin-top: 10px;
  border-top: 2px solid #f0f0f0;
}
</style>
