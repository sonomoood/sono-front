<template>
    <h1>De quelle humeur est votre chanson préférée ?</h1>
<form id="recommandation" @submit.prevent="classifier" method="post">
<p>Saisissez le nom du chanteur le titre de la chanson et ses paroles pour découvrir son émotion ! </p>
<p><label for="author">Saisissez le nom du chanteur : </label></p>
<p><input v-model="author" type="text" placeholder="Ecrivez ici"/></p>
<p><label for="title">Saisissez le titre de la chanson : </label></p>
<p><input v-model="title" type="text" placeholder="Ecrivez ici"/></p>
<p><label for="lyrics">Saisissez les paroles : </label></p>
<p><textarea v-model="lyrics" type="text" placeholder="Ecrivez ici"/></p>
<p><input type="submit" value="Analyser"/></p>
</form>
</template>
<script>

export default({
    data() {
        return{
            form:{
                author:'',
                title:'',
                lyrics:''
            }
        }
        
    },
    methods :{
        async classifier(){
            const res = await fetch('http://localhost:3000/classification/from-lyrics', {
                 method: 'POST' , 
                 headers: {'Content-Type':'application/json'},
                 body: JSON.stringify({
                     author: this.author,
                     title: this.title,
                     lyrics: this.lyrics
                 })
                });
            //res.json().then(body => console.log(body));
            }
        }
})
</script>
