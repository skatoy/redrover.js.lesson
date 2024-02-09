let name = "Дима";
let age = 80;
if (age <= 18) {
    console.log("Возьмите стакан сока");
} else if (age >= 80) {
    console.log("Может кефир?");
} else {
    console.log("Могу предложить бокал вина");
}

let weigth = 15;

if (weigth >= 30) {
    console.log('С завтрашнего дня - на воде и огурцах')
} else if (25<= weigth && weigth <= 29.9) {
    console.log('Тортик лучше отдать соседке')
} else if (18.5 <= weigth && weigth <= 24.9) {
    console.log('Молодец! Так держать')
} else if (18.5 > weigth) {
    console.log('Мало каши ел(а)')
}


let ticketPrice = 100
let passengersAge = 20

if(passengersAge<2){
    console.log(ticketPrice*0.9)
}else if(passengersAge>=65){
    console.log(ticketPrice*0.6)
}else if(2<=passengersAge && passengersAge<=18){
    console.log(ticketPrice*0.5)
}else if(18<=passengersAge && passengersAge<65){
    console.log(ticketPrice)
}