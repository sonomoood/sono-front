<template>
    <h1>Musique</h1>
<form action="" method="get">
<p><label for="music">Saisissez un titre de musique : </label>
<input id="music" v-model="music" type="text" placeholder="Ecrivez ici"/></p>
<p><input type="submit" value="Afficher"/></p>
</form>
</template>
<script>

export default({
    data() {
        return{
            form:{
                title:''
            }
        }
        
    },
    methods :{
        getMusicByTile(){

        }
    }
})
</script>
