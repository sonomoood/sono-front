<template>
    <h1>De quelle humeur est votre chanson préférée ?</h1>
<form id="recommandation" @submit.prevent="classifier" method="post">
<p>Saisissez le titre de la chanson et ses paroles pour découvrir son émotion ! </p>
<p><label for="title">Saisissez le titre de la chanson : </label></p>
<p><input v-model="title" type="text" placeholder="Ecrivez ici"/></p>
<p><label for="lyrics">Saisissez les paroles : </label></p>
<p><textarea v-model="lyrics" type="text" placeholder="Ecrivez ici"/></p>
<p><input type="submit" value="Analyser"/></p>
</form>

<div>
    <br>
<p>L'émotion de votre chanson est {{ mood }} !</p>
</div>
</template>
<script>

export default({
    data() {
        return{
            form:{
                title:'',
                lyrics:''
            },
            mood:''
        }
        
    },
    methods :{
        async classifier(){
            const res = await fetch('http://localhost:3000/classification/from-lyrics', {
                 method: 'POST' , 
                 headers: {'Content-Type':'application/json'},
                 body: JSON.stringify({
                     title: this.title,
                     lyrics: this.lyrics
                 })
                });
                console.log(res);
                this.mood = await res.text();
            }
        }
})
</script>
