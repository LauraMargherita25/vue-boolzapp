const app = new Vue({
    el: "#root",
    data:{
        serchContact: "",
        activeChat: 0,
        newMsgText: "",
        recivedMsgText:"",
        arrContacts: [
            {
                "contactImg": "avatar_1.jpg",
                "contactName": "Michele",
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
                ],
                serch: true,
            },
            {
                "contactImg": "avatar_2.jpg",
                "contactName": "Fabio",
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
                ],
                serch: true,
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
        openChat(index){
            this.activeChat = index;
        },
        submitNewMex(activeChat){
            // this.objNewMex.mexTime = "15:50";
            
            if (this.newMsgText != "") {
                
                this.arrContacts[activeChat].arrMexs.push({ mexText: this.newMsgText,mexTime: "12.30", mexStatus:"send"});
                this.newMsgText = "";
            }
            
        },
        reciveNewMex(activeChat){
            
            if (this.newMsgText != "") {
                
                setTimeout(() => {
                    let h = new Date();
                    let n = h.getHours() + ":" + h.getMinutes();
                    this.recivedMsgText = "ok";
                    this.arrContacts[activeChat].arrMexs.push({ mexText: this.recivedMsgText, mexTime: n, mexStatus:"recived" });
                },1000)
            }
            
        },
        findContact()  {
            this.arrContacts.forEach(element => {
                if (element.contactName.toLowerCase().includes(this.serchContact.toLowerCase())) {
                    element.serch = true;
                } else {
                    element.serch = false;
                }
            });
        }

        
    }
})


