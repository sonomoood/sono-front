<template>
    <h1>Twitter API</h1>
<form id="twitter" @submit.prevent="showTweets">
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
        async showTweets(){
            const res = await fetch('http://localhost:3000/recommendation/from-twitter?twitter_username='+this.username, {
                 method: 'GET'
            });
        }
    }
})
</script>
