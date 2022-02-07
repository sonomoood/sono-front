<template>
        <h1>Vous souhaitez ajouter votre propre musique ?</h1>
<form action="" method="post">
<p>Saisissez le titre, l'artiste et les paroles de votre musique :</p>
<label for="1">Titre de la musique</label>
<input id="1" type="text" placeholder="Ecrivez ici"/>
<label for="2">Artiste de la musique</label>
<input id="2" type="text" placeholder="Ecrivez ici"/>
<label for="3">Paroles de la musique</label>
<input id="3" type="text" placeholder="Ecrivez ici"/>
<button >Ajouter</button>
</form>
</template>

<script>

export default({
    data() {
        return{
            form:{
                title:'',
                author:'',
                lyrics:''
            }
        }
        
    },
    methods :{
        addMusic(){

        }
    }
})
</script>
