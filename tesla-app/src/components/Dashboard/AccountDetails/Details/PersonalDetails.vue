<template>
  <div class="p-details-main">
    <div class="p-details-item">
      Name:<input class="p-details-name" placeholder="name" />
    </div>
    <div class="p-details-item">
      Lastname:<input class="p-details-name" placeholder="surrname" />
    </div>
    <div class="p-details-item">
      E-mail:<input class="p-details-name" placeholder="email" />
    </div>
    <div class="p-details-item">
      Phone Number:<input class="p-details-name" placeholder="phonenumber" />
    </div>
    <div class="p-details-item">
      Password<input
        type="password"
        class="p-details-name"
        placeholder="*******************"
      />
    </div>
    <div style="margin-top:5px" class="p-details-item change">
      <button class="change clickAnimation">Change Password</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.p-details-main {
  display: grid;
  grid-template-columns: 50% 50%;
}
.p-details-item {
  font-weight: 500;
  font-size: 1.1em;
  margin-bottom: 10px;
}
.p-details-name {
  width: 50%;
  margin-left: 20px;
}
.p-details-name::placeholder {
  color: black;
}
.p-details-name:focus {
  outline: none;
}
.change {
  border-radius: 10px;
  height: 30px;
  width: 200px;
  background-color: #dddddd;
}
.change:hover {
  background-color: #cacaca;
}
.change:active {
  background-color: #dddddd;
}
</style>
