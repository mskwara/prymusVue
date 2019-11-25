<template>
  <div>
    <h1>{{ title }}</h1>
    <h2>{{ title }}</h2>
    <h3>{{ happiness }}</h3>
    <br>
    <button @click="add()">Add!</button>
    <br>
    <button @click="subtract()">Subtract!</button>
    <br>
    <button @click="startOver()">Start over!</button>
    <br>
    <button @click="changeHappy()">Happy or sad?</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Clicked 0 times!',
        happiness: 'Jak sie czujesz?',
        isHappy: false,
        a: 0
      }
    },
    methods: {
      add(){
        this.a = this.a + 1;
        this.title = 'Clicked ' + this.a + " times!";
      },
      startOver(){
        this.a = 0;
        this.title = 'Clicked ' + this.a + " times!";
        this.isHappy = false;
        this.happiness = 'Jak sie czujesz?'
      },
      subtract(){
        this.a = this.a - 1;
        this.title = 'Clicked ' + this.a + " times!";
      },
      changeHappy(){
        if(this.isHappy == false){
          this.happiness = 'Happy';
          this.isHappy = true;
        }
        else if(this.isHappy == true){
          this.happiness = 'Sad';
          this.isHappy = false;
        }
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

  }
</style>
