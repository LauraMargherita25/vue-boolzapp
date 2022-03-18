const app = new Vue({
    el: "#root",
    data:{
        user:{
            userName: "Laura",
            userImg: "_io"
        },
        searchContact: "",
        activeChatIndex: 0,
        arrChats:[
            {
                contact: {
                    contactName: "Michele",
                    contactImg: "_1",
                },
                serch: true,
                newMexText: "",
                arrMexs:[{
                    mexText: "Ciao Michele",
                    mexTime: "12:00",
                    mexStatus: "sent",
                    panelMenu: false,
                },
                {
                    mexText: "Ciao",
                    mexTime: "12:00",
                    mexStatus: "recived",
                    panelMenu: false,
                }]
            },
            {
                contact: {
                    contactName: "Gesualdo",
                    contactImg: "_2",
                },
                serch: true,
                newMexText: "",
                arrMexs:[{
                    mexText: "Ciao Gesualdo",
                    mexTime: "12:00",
                    mexStatus: "sent",
                    panelMenu: false,
                },
                {
                    mexText: "Ciao",
                    mexTime: "12:00",
                    mexStatus: "recived",
                    panelMenu: false,
                }]
            },
            {
                contact: {
                    contactName: "Berenilda",
                    contactImg: "_3",
                },
                serch: true,
                newMexText: "",
                arrMexs:[{
                    mexText: "Ciao Berenilda",
                    mexTime: "12:00",
                    mexStatus: "sent",
                    panelMenu: false,
                },
                {
                    mexText: "Ciao",
                    mexTime: "12:00",
                    mexStatus: "recived",
                    panelMenu: false,
                }]
            }
        ]
    },
    methods:{
        getImgSrc(img){
            return "img/avatar" + img + ".jpg";
        },
        openChat(index){
            this.activeChatIndex = index;
        },
        sendNewMex(){
            
            let h = new Date();
            let nh = h.getHours() + ":" + h.getMinutes();
            
            const activeChat = this.arrChats[this.activeChatIndex];
            if ( activeChat.newMexText != "") {
                
                const newMex = {
                    mexText: activeChat.newMexText,
                    mexTime: nh,
                    mexStatus: "sent",
                    panelMenu: false,
                }
                activeChat.arrMexs.push(newMex);
    
                activeChat.newMexText = "";
    
                this.recivedNewMex(this.activeChatIndex)
            } 


        },
        recivedNewMex(chatIndex){

            setTimeout(() => {

                let h = new Date();
                let nh = h.getHours() + ":" + h.getMinutes();

                const arrAnswers = [
                    "Ok",
                    "うる せ え ぶっとばす ぞ",
                    "おいしい"
                ]

                let rndAnswer = Math.floor(Math.random() * arrAnswers.length);

                const newMex = {
                    mexText: arrAnswers[rndAnswer],
                    mexTime: nh,
                    mexStatus: "recived",
                    panelMenu: false,
                }

                this.arrChats[chatIndex].arrMexs.push(newMex)
            }, 1000);
        },
        findContact(){
            this.arrChats.forEach(chat => {
                if (chat.contact.contactName.toLowerCase().includes(this.searchContact.toLowerCase())) {
                    chat.serch = true;
                } else {
                    chat.serch = false;
                }
            });
        },
        showPanel(contactIndex, arrMexsIndex){
            this.arrChats[contactIndex].arrMexs[arrMexsIndex].panelMenu = !this.arrChats[contactIndex].arrMexs[arrMexsIndex].panelMenu
        },
        deleteMex(contactIndex, arrMexsIndex){
            this.arrChats[contactIndex].arrMexs.splice(arrMexsIndex, 1);
        }
    },
})

