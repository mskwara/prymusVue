<template>
  <div>
    <h1 v-if="list.length > 0">{{title}}</h1>
    <ul class="list-group list-group-flush" v-if="list.length > 0">
      <li class="list-group-item" :key="person.id" v-for="person in list">
        {{ person.id+" "+person.name+" "+person.surname }}
        <button class="btn btn-danger btn-sm remove" @click="removePerson(person)"><img src="./assets/delete.svg">Usuń</button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      };
    },
    props: {
      list: Array,
      title: String
    },
    methods: {
      removePerson(person) {
        this.$emit('removed', person.id);
      }
    }
  };
</script>
<style>
  .remove {
    float: right;
  }
  button > img {
    width: 20px;
    height: 20px;
    padding-bottom: 3px;
  }

</style>
