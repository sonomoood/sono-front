<template>
    <h1>Twitter API</h1>
<form id="twitter" action="http://localhost:3000/recommandation/from-twitter/" method="get">
<p><label for="username">Saisissez un nom d'utilisateur : </label>
<input id="username" v-model="username" type="text" placeholder="Ecrivez ici"/></p>
<p><input type="submit" value="Afficher"/></p>
</form>
</template>
<script>

export default({
    data() {
        return{
            form:{
                username:''
            }
        }
        
    },
    methods :{
        showTweets(){

        }
    }
})
</script>
