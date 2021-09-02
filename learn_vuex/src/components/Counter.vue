<template>
  <div
    :style="{ color: $store.state.colourCode }"
    class="counter">
    {{ $store.state.counter }}
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>