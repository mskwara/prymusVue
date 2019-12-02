<template>
<div>
  <div class="left">
    <button @click="add()">Add!</button>
    <br>
    <button @click="subtract()">Subtract!</button>
    <br>
    <button @click="startOver()">Start over!</button>
    <br>
    <button @click="changeHappy()">Happy or sad?</button>
    <br>
    <button @click="addNew()">Add random number</button>
  </div>
  <div class="right">
    <h1>Clicked {{ count }} times!</h1>
    <h3 :class="isHappy ? 'happy' : 'sad'">{{ happiness }}</h3>
    <h4>{{ evenOrOdd() }}</h4>

    <ul v-if="numbers.length > 0">
      <li :key="number" v-for="number in numbers">{{ number }}</li>
    </ul>

  </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        happiness: 'Jak sie czujesz?',
        isHappy: false,
        count: 0,
        color: 'red',
        numbers: []
      }
    },
    methods: {
      add(){
        this.count = this.count + 1;
      },
      startOver(){
        this.count = 0;
        this.isHappy = false;
        this.happiness = 'Jak sie czujesz?'
      },
      subtract(){
        this.count = this.count - 1;
      },
      changeHappy(){
        this.isHappy = !this.isHappy;
        this.happiness = this.isHappy ? 'Happy' : 'Sad';
      },
      evenOrOdd(){
        if(this.count%2 == 0){
          return "Even";
        }
        else {
          return "Odd";
        }
      },
      addNew() {
        this.numbers.push(Math.round(Math.random() * 100));
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
    width: 25%;
    border-right: 1px solid black;
  }
  .right {
    float: right;
    width: 50%;
    text-align: right;
    padding-right: 50px;
  }
  .happy {
    color: red;
  }
  .sad {
    color: green;
  }
  ul {
    float: right;
  }
</style>
