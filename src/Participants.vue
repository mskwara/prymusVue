<template>
<div>
  <div class="left">
    <form @submit.prevent="addParticipant()" @reset.prevent="clear()">
      <div class="form-group">
        <label class="form-label">Imię</label><br>
        <input class="form-control" placeholder="Imię" type="text" v-model="name">
      </div>
      <div class="form-group">
        <label class="form-label">Nazwisko</label><br>
        <input class="form-control" placeholder="Nazwisko" type="text" v-model="surname">
      </div>
        <button class="btn btn-primary" :disabled="disableOrNot()" type="submit">Add!</button>
        <button class="btn btn-primary" type="reset">Clear list!</button>
    </form>
  </div>
  <div class="right">
    <h1 v-if="participants.length > 0">Lista ludków</h1>
    <ul class="list-group list-group-flush" v-if="participants.length > 0">
      <li class="list-group-item" :key="participant" v-for="participant in participants">{{ participant }}</li>
    </ul>

  </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        name: "",
        surname: "",
        participants: []
      }
    },
    methods: {
      addParticipant() {
        this.participants.push(this.name +" "+ this.surname);
        this.name = "";
        this.surname = "";
      },
      clear() {
        this.participants = [];
        this.name = "";
        this.surname = "";
      },
      disableOrNot(){
        return this.name == "" || this.surname == "" ? true : false;
      }
    }

  };
</script>

<style>
  /* button{
    padding: 10px;
    margin: 10px;
    border: 1px solid blue;
    border-radius: 5px;
    width: 70%;
    min-width: 120px;
  }
  button:hover {
    background-color: #ffffe6;
  } */
  button {
    margin-right: 10px !important;
  }
  h1 {
    color: #0000ff;
  }
  .left {
    float: left;
    width: 49%;
    padding: 20px;
    border-right: 1px solid black;
  }
  .right {
    float: right;
    width: 50%;
    padding: 20px;
  }

  /* ul {
    float: left;
    margin-right: 50px;
  }
  li {
    font-size: 15pt;
    list-style-type: decimal;
  } */
  /* input {
    margin-bottom: 5px;
    border-radius: 5px;
    height: 25px;
    margin-top: 10px;
    width: 200px;
  }
  label {
    margin-right: 10px;
  } */
</style>
