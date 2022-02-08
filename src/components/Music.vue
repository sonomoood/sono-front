<template>
    <h1>Musique</h1>
<form @submit.prevent="getMusicByTile" method="get">
<p><label for="music">Saisissez un titre de musique : </label>
<input id="music" v-model="music" type="text" placeholder="Ecrivez ici"/></p>
<p><input type="submit" value="Afficher"/></p>
</form>
<div v-if="musics != null">
    <span> Mood : {{ musics.mood }}</span><br>
    <hr>
    <div v-for="music in musics" :key="music">
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
                title:''
            },
            musics: {}
        }
        
    },
    methods :{
        async getMusicByTile(){
            const res = await fetch('http://localhost:3000/music/get?title='+this.title, {
                 method: 'GET'});
                 this.musics = await res.json();
        }
    }
})
</script>
