const { createApp } = Vue


createApp({
    data() {
        return {
            generatedMails: [],
            randomMailsArray: [],
            mailsAmount: 10
        }
    },
    mounted() {
        this.generateMails(this.mailsAmount)
    },
    methods: {
        generateMails(amount) {
            for (let i = 0;i < amount;i++) {

                this.getMail()
            }

        },
        getMail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                this.generatedMails.push(response.data.response)
                console.log(this.generatedMails.length)
                if (this.mailsAmount === this.generatedMails.length) {

                    this.randomMailsArray = this.generatedMails
                    console.log(this.randomMailsArray)
                }
            })
        }
    }
}).mount('#app')