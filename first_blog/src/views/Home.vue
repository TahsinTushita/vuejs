<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>

    <div v-if="posts.length">
      <PostList v-if="showPosts" :posts="posts"/>
      <button @click="showPosts = !showPosts">Toggle Posts</button>
      <button @click="posts.pop()">Delete a post</button>
    </div>
    <div v-else>Loading . . .</div>
    <!-- <h2>Computed</h2>
    <input type="text" v-model="search">
    <p>searching for - {{ search }}</p>
    <button @click="stopWatching">Stop watching</button>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div> -->
  </div>
</template>

<script>
// import { computed, ref, watch, watchEffect } from "vue"

import PostList from "../components/PostList.vue"
import getPosts from "../composables/getPosts"
import { ref } from "vue"

export default {
  name: "Home",
  components: { PostList },
  setup() {

    // const search = ref("")
    // const names = ref(["maria", "ross", "havoc", "hughes"])

    // const matchingNames = computed(() => {
    //   return names.value.filter((name) => name.includes(search.value))
    // })

    // const stopWatch = watch(search, () => {
    //   console.log("watch ran")
    // })

    // const stopWatchEffect = watchEffect(() => {
    //   console.log("watchEffect ran", search.value)
    // })

    // const stopWatching = () => {
    //   stopWatch()
    //   stopWatchEffect()
    // }

    // return { names, search, matchingNames, stopWatching }

    
    const { posts, error, load } = getPosts() 
    load()

    const showPosts = ref(true)

    return { posts, showPosts, error }
  }
};
</script>
