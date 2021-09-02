<template>
  <div>
      <input
        v-model="colourCode"
        placeholder="Enter colour code" 
        type="text">
    </div>
</template>

<script>
export default {
  computed: {
    colourCode: {
      get() {
        return this.$store.state.colourCode
      },
      set(newColour) {
        this.$store.dispatch('setColourCode', newColour)
      }
    }
  }
}
</script>

<style>

</style>