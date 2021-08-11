<template>
    <p>Reaction time: {{ score }} ms</p>
    <p class="rank">{{ rank }}</p>
</template>

<script>
export default {
    props: ["score"],
    data(){
        return {
            rank: null
        }
    },
    mounted() {
        if(this.score < 250){
            this.rank = "WOW"
        } else if(this.score < 400){
            this.rank = "Not Bad"
        } else {
            this.rank = "Meh"
        }
    }
}
</script>

<style scoped>
    .rank {
        font-size: 1.4em;
        color: #0faf87;
        font-weight: bold;
    }
</style>