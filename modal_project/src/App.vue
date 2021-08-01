<template>
  <h1>{{ title }}</h1>
  <br>
  <input type="text" ref="name">
  <button @click="handleClick">Click</button>

  <p>Welcome . . .</p>
  <teleport to="#modals" v-if="showModal">
  <!-- <Modal :header="header" :text="text" theme="sale" @close="toggleModal"/> -->
  <Modal :header="header" :text="text" theme="sale" @close="toggleModal">
    <template v-slot:links>
      <a href="#">Named slot</a>
      <a href="#">more info</a>
    </template>
    
    <h1>Slot</h1>
    <p>slot content</p>
  </Modal>
  </teleport>

  <div v-if="showModalTwo">
    <Modal :header="header" :text="text" @close="toggleModalTwo">
    
    <h1>Slot 2</h1>
    <p>slot 2 content</p>
  </Modal>
  </div>
  
  <button @click.shift="toggleModal">Show Modal (shift)</button><br><br>
  <button @click="toggleModalTwo">Show Modal 2</button>
</template>

<script>
import Modal from "./components/Modal.vue"

export default {
  name: 'App',
  components: { Modal },
  data(){
    return {
      title: "1st Vue App",
      header: "Modal",
      text: "modal content",
      showModal: false,
      showModalTwo: false
    }
  },

  methods: {
    handleClick(){
      console.log(this.$refs.name)
      this.$refs.name.classList.add("active")
      this.$refs.name.focus()
    },

    toggleModal(){
      this.showModal = !this.showModal
    },

    toggleModalTwo(){
      this.showModalTwo = !this.showModalTwo
    }
  }
}
</script>

<style>
#app, #modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  border-bottom: 3px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
