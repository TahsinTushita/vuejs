<template>
  <div class="postList">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post"/>
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from "@vue/runtime-core"
import SinglePost from "./SinglePost.vue"

export default {
  props: [ "posts" ],
  components: { SinglePost },
  setup() {
    onMounted(() => console.log("PostList Mounted"))
    onUnmounted(() => console.log("PostList Unmounted"))
    onUpdated(() => console.log("PostList Updated"))
  }
}
</script>

<style>

</style>