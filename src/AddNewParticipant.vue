<template>
  <div>
    <form @submit.prevent="addParticipant()" @reset.prevent="clear()">
      <div class="form-group">
        <label class="form-label">Imię</label><br>
        <input class="form-control" placeholder="Imię" type="text" v-model="newParticipant.name">
      </div>
      <div class="form-group">
        <label class="form-label">Nazwisko</label><br>
        <input class="form-control" placeholder="Nazwisko" type="text" v-model="newParticipant.surname">
      </div>
        <button class="btn btn-primary" :disabled="disableOrNot()" type="submit">Add!</button>
        <button class="btn btn-primary" type="reset">Clear list!</button>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        newParticipant: {
          id: 0,
          name: "",
          surname: "",
        },
        idCounter: 0,
    };
    },
    methods: {
      addParticipant() {
        this.newParticipant.id = this.idCounter;
        this.$emit('added', this.newParticipant);
        this.newParticipant = {
          id: 0,
          name: "",
          surname: "",
        };
        this.idCounter++;
        this.clearInputs();
      },
      clear() {
        this.$emit('clear');
        this.clearInputs();
      },
      disableOrNot(){
        return this.newParticipant.name == "" || this.newParticipant.surname == "" ? true : false;
      },
      clearInputs() {
        this.newParticipant.name = "";
        this.newParticipant.surname = "";
      }
    }
  };
</script>
<style>

</style>
