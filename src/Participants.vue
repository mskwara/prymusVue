<template>
<div>
  <div class="left">
    <label>Imię</label>
    <input type="text" v-model="name">
      <br>
    <label>Nazwisko</label>
    <input type="text" v-model="surname">

    <button @click="addParticipant()">Add!</button>
  </div>
  <div class="right">

    <ul v-if="participants.length > 0">
      <li :key="participant" v-for="participant in participants">{{ participant }}</li>
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
      }
    }

  };
</script>

<style>
  button{
    padding: 10px;
    margin: 10px;
    border: 1px solid blue;
    border-radius: 5px;
    width: 70%;
    min-width: 120px;
  }
  button:hover {
    background-color: #ffffe6;
  }
  h1 {
    color: #0000ff;
  }
  .left {
    float: left;
    width: 49%;
    border-right: 1px solid black;
  }
  .right {
    float: right;
    width: 50%;
    text-align: right;
    padding-right: 50px;
  }
  ul {
    float: right;
  }
  input {
    margin-bottom: 5px;
  }
  label {
    margin-right: 10px;
  }
</style>
