const user ={ id:11 , name:'sabbir' , job:'web Dev'}


const shop = {
 name:'ali complex',
 address:'Nakhalpara 209',
 profit:200000 ,
 products : ['laptop','mobile' ,'candy'],
 isExpancive : false 


}

const shopStringfiled = JSON.stringify(shop);
const converted =JSON.parse(shopStringfiled);
console.log(shop);
console.log(shopStringfiled);
console.log(converted.profit);