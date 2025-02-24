var num1, num2, num3, result, biggest, luckyLetter, totalMinutes, hours, minutes;

function spin() {
    num1 = Math.ceil(Math.random() * 7);
    num2 = Math.ceil(Math.random() * 7);
    num3 = Math.ceil(Math.random() * 7);

    checkWin();
    calculateExtras();

    replace.innerHTML = "TRY YOUR LUCK!";
    rand1.innerHTML = `SLOT 1: ${num1}`;
    rand2.innerHTML = `SLOT 2: ${num2}`;
    rand3.innerHTML = `SLOT 3: ${num3}`;
    analysis.innerHTML = `${result} </br> THE HIGHEST NUMBER: ${biggest} </br> RANDOM LUCKY LETTER (you'll need it): ${luckyLetter} </br> OVERALL PLAY TIME: ${hours}h ${minutes}m`;
}

function checkWin() {
    if (num1 === 7 && num2 === 7 && num3 === 7) {
        result = "HOLYYY JACKPOTTTTT! WE *yes me and you* DID ITTT!";
    } else if (num1 === num2 && num2 === num3) {
        result = "WHATTT! THREE MATCHING NUMBERS! THEY AINT 7s THO";
    } else if (num1 === num2 || num2 === num3 || num1 === num3) {
        result = "LUCKY, BUT NOT THAT LUCKY! JUST TWO MERE MATCHING NUMBERS!";
    } else {
        result = "BAHAHAHAH. just quit... ORRR YOU CAN GAMBLE MORE,GOGOGO!";
    }
}

function calculateExtras() {
    biggest = Math.max(num1, num2, num3);

    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    luckyLetter = letters.charAt(biggest - 1) || "N/A";

    totalMinutes = num1 * num2;
    hours = Math.floor(totalMinutes / 60);
    minutes = totalMinutes % 60;
}