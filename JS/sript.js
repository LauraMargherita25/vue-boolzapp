const app = new Vue({
    el: "#root",
    data:{
        activeChat: 0,
        newMsgText: "",
        recivedMsgText:"",
        arrContacts: [
            {
                "contactImg": "avatar_1.jpg",
                "contactData": {
                    "contactName": "Michele"
                },
                "lastLog": "12:00",
                arrMexs: [
                    {
                        "mexText": "Ciao! Come va?",
                        "mexTime": "15:50",
                        "mexStatus": "send"
                    },
                    {
                        "mexText": "Hai portato fuori il cane?",
                        "mexTime": "16:45",
                        "mexStatus": "recived"
                    }
                ]
            },
            {
                "contactImg": "avatar_2.jpg",
                "contactData": {
                    "contactName": "Fabio",
                    
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
                    },
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
            /*{
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
            },*/
        ]
    },
    methods: {
        submitNewMex(activeChat){
            this.arrContacts[activeChat].arrMexs.push({ mexText: this.newMsgText,mexTime: "12.30", mexStatus:"send"});
            this.newMsgText = "";
            // this.objNewMex.mexTime = "15:50";
            
            
        },
        openChat(index){
            this.activeChat = index;
        },
        reciveNewMex(activeChat){
            setTimeout(() => {
                let h = new Date();
                let n = h.getHours() + ":" + h.getMinutes();
                this.recivedMsgText = "ok";
                this.arrContacts[activeChat].arrMexs.push({ mexText: this.recivedMsgText, mexTime: n, mexStatus:"recived" });
            },1000)
        }
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
        
    }
})


