<template>
    <h1>De quelle humeur êtes-vous aujourd'hui ?</h1>
<form id="recommandation" action="http://localhost:3000/classification/from-lyrics" method="post">
<p>Saisissez votre humeur et nous vous proposerons une liste de musique correspondante !</p>
<p><input v-model="mood" type="text" placeholder="Ecrivez ici"/></p>
<p><input type="submit" value="Analyser"/></p>
</form>
</template>
<script>

export default({
    data() {
        return{
            form:{
                mood:''
            }
        }
        
    },
    methods :{
        classifier(){

        }
    }
})
</script>
