<template>
    <h1>Twitter API</h1>
<form id="twitter" @submit.prevent="showTweets">
<p><label for="username">Saisissez un nom d'utilisateur : </label>
<input id="username" v-model="username" type="text" placeholder="Ecrivez ici"/></p>
<p><input type="submit" value="Afficher"/></p>
</form>
<div v-if="musics != null">
    <span> Mood : {{ musics.mood }}</span><br>
    <hr>
    <div v-for="music in musics.musics" :key="music">
        <span>Titre : {{ music.title }}</span><br>
        <span>Paroles : {{ music.lyrics }} </span>
        <hr>
    </div>
</div>
</template>
<script>

export default({
    data() {
        return{
            form:{
                username:''
            },
            musics:{}
        }
    },
    methods :{
        async showTweets(){
            const res = await fetch('http://localhost:3000/recommendation/from-twitter?twitter_username='+this.username, {
                 method: 'GET'
            });
            this.musics = await res.json();
        }
    }
})
</script>
