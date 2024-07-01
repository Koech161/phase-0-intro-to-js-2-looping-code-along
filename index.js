// Code your solutions in this file
const names= ("Guadalupe", "Ollie", "Aki")
const event ="suprise"
function writeCards(names, event){
    let thankYouMessage=[]
    for(let i=0;i<names.length;i++){
        let message= `Thank you, ${names[i]}, for the wonderful ${event} gift!`
        thankYouMessage.push(message)
    }return thankYouMessage
}
let i =10
function countDown(number){
    for(i=number;i>=0;i--){
        console.log(i)
    }
}
