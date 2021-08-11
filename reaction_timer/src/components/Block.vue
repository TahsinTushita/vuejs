<template>
  <div class="block">CLick</div>
</template>

<script>
export default {
    props: ["delay"],
    mounted(){
      console.log("Block mounted")
    }
}
</script>

<style>
 .block {
     width: 400px;
     border-radius: 20px;
     background: #0faf87;
     color: white;
     text-align: center;
     padding: 100px 0;
     margin: 40px auto;
 }
</style>