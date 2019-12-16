<template>
<div>
  <div class="left">
    <add-new-participant @added="addNewParticipant($event)" @clear="clear()"></add-new-participant>
  </div>
  <div class="right">
    <participants-list :list="participants" title="Lista osób" @removed="removePerson($event)"></participants-list>
  </div>
</div>
</template>

<script>
  import ParticipantsList from "./ParticipantsList.vue";
  import AddNewParticipant from "./AddNewParticipant.vue";

  export default {
    components: {ParticipantsList, AddNewParticipant},
    data() {
      return {
        participants: []
      }
    },
    methods: {
      addNewParticipant(participant) {
        this.participants.push(participant);
      },
      removePerson(id){
        for(var i = 0 ; i < this.participants.length ; i++){
          if(this.participants[i].id == id){
            this.participants.splice(i, 1);
          }
        }

      },
      clear() {
        this.participants = [];
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
