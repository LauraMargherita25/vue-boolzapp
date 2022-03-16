const app = new Vue({
    el: "#root",
    data:{
        objNewMex: {
            "mexText": "",
            "mexTime": "15:50",
        },
        /*arrMexs: [
            {
                "mexText": "Ciao! Come va?",
                "mexTime": "15:50"
            },
            {
                "mexText": "Hai portato fuori il cane?",
                "mexTime": "16:45"
            }
        ],*/
        arrContacts: [
            {
                "contactImg": "avatar_1.jpg",
                "contactData": {
                    "contactName": "Michele",
                    "lastMex": "Ultimo messaggio inviato"
                },
                "lastLog": "12:00",
                arrMexs: [
                    {
                        "mexText": "Ciao! Come va?",
                        "mexTime": "15:50"
                    },
                    {
                        "mexText": "Hai portato fuori il cane?",
                        "mexTime": "16:45"
                    }
                ]
            },
            {
                "contactImg": "avatar_2.jpg",
                "contactData": {
                    "contactName": "Fabio",
                    "lastMex": "Ultimo messaggio inviato"
                },
                "lastLog": "12:00"
            },
            {
                "contactImg": "avatar_3.jpg",
                "contactData": {
                    "contactName": "Samuele",
                    "lastMex": "Ultimo messaggio inviato"
                },
                "lastLog": "12:00"
            },
            {
                "contactImg": "avatar_4.jpg",
                "contactData": {
                    "contactName": "Alessandro B.",
                    "lastMex": "Ultimo messaggio inviato"
                },
                "lastLog": "12:00"
            },
            {
                "contactImg": "avatar_5.jpg",
                "contactData": {
                    "contactName": "Alessandro L.",
                    "lastMex": "Ultimo messaggio inviato"
                },
                "lastLog": "12:00"
            },
            {
                "contactImg": "avatar_6.jpg",
                "contactData": {
                    "contactName": "Claudia",
                    "lastMex": "Ultimo messaggio inviato"
                },
                "lastLog": "12:00"
            },
            {
                "contactImg": "avatar_7.jpg",
                "contactData": {
                    "contactName": "Federico",
                    "lastMex": "Ultimo messaggio inviato"
                },
                "lastLog": "12:00"
            },
            {
                "contactImg": "avatar_8.jpg",
                "contactData": {
                    "contactName": "Davide",
                    "lastMex": "Ultimo messaggio inviato"
                },
                "lastLog": "12:00"
            },
        ]
    },
    methods: {
        submitNewMex(){
            this.arrMexs.push({ ...this.objNewMex });
            this.objNewMex.mexText = "";
            // this.objNewMex.mexTime = "15:50";
            
            
        },
        /* getHours() {
            
            let today = new Date();
            console.log(today)
            let time = today.getHours() + ":" + today.getMinutes();
            console.log(time)
        },*/
        /*currentDateTime() {
            const current = new Date();
            const date = current.getFullYear()+'-'+(current.getMonth()+1)+'-'+current.getDate();
            const time = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
            const dateTime = date +' '+ time;
      
            return dateTime;
        }*/
        openChat(){
            console.log("hai aperto questa chat")
        }
        
    }
})


