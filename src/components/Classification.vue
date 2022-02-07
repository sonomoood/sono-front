<template>
    <h1>De quelle humeur êtes-vous aujourd'hui ?</h1>
<form action="" method="post">
<p>Saisissez votre humeur et nous vous proposerons une liste de musique correspondante !</p>
<input type="text" placeholder="Ecrivez ici"/>
<button >Analyser</button>
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
