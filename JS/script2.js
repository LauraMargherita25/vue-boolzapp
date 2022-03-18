const app = new Vue({
    el: "#root",
    data:{
        user:{
            userName: "Laura",
            userImg: "_io"
        },
        activeChatIndex: 0,

        newMexText: "",
        arrChats:[
            {
                contact: {
                    contactName: "Michele",
                    contactImg: "_1",
                },
                arrMexs:[{
                    mexText: "Ciao Michele",
                    mexTime: "12:00",
                    mexStatus: "sent",
                },
                {
                    mexText: "Ciao",
                    mexTime: "12:00",
                    mexStatus: "recived",
                }]
            },
            {
                contact: {
                    contactName: "Gesualdo",
                    contactImg: "_2",
                },
                arrMexs:[{
                    mexText: "Ciao Gesualdo",
                    mexTime: "12:00",
                    mexStatus: "sent",
                },
                {
                    mexText: "Ciao",
                    mexTime: "12:00",
                    mexStatus: "recived",
                }]
            },
            {
                contact: {
                    contactName: "Berenilda",
                    contactImg: "_3",
                },
                arrMexs:[{
                    mexText: "Ciao Berenilda",
                    mexTime: "12:00",
                    mexStatus: "sent",
                },
                {
                    mexText: "Ciao",
                    mexTime: "12:00",
                    mexStatus: "recived",
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
            let n = h.getHours() + ":" + h.getMinutes();

            this.arrChats[this.activeChatIndex].arrMexs.push({
                mexText: this.newMexText,
                mexTime: n,
                mexStatus: "sent",
            })

            this.newMexText = "";

        }
    },
})