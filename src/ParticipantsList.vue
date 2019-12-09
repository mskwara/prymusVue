<template>
  <div>
    <h1 v-if="list.length > 0">{{title}}</h1>
    <ul class="list-group list-group-flush" v-if="list.length > 0">
      <li class="list-group-item" :key="person" v-for="person in list">{{ person }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      list: Array,
      title: String
    }
  };
</script>
