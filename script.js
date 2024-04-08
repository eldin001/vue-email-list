/* Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista. */


const { createApp } = Vue;

createApp({
    data () {
        return{
            email: '',
        }
    },
    methods: {
        generateEmail(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        }
    }

}).mount('#app')

