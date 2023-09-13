let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;
let btnRetry = window.document.querySelector('#btnRetry')

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

btnRetry.addEventListener('click', ()=>{
    window.document.location.reload()
})

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${numToPr(answerNumber) }?`;

minValue = (minValue < -999) ? -999 : minValue;
maxValue = (maxValue > 999) ? 999 : maxValue;

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = 0;
    maxValue = 100;
    orderNumber = 0;
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            let phraseRandom = Math.round( Math.random()*1);
            switch (phraseRandom){
                case 0:
                    answerField.innerText = `Вы загадали неправильное число!\n\u{1F914}` ;
                    break;
                case 1:
                    answerField.innerText = `Я сдаюсь..\n\u{1F92F}`;
                    break;
            }
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${numToPr(answerNumber) }?`;
            gameRun = true;
        }
    }
})


document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            let phraseRandom = Math.round( Math.random()*1);
            switch (phraseRandom){
                case 0:
                    answerField.innerText = `Вы загадали неправильное число!\n\u{1F914}` ;
                    break;
                case 1:
                    answerField.innerText = `Я сдаюсь..\n\u{1F92F}`;
                    break;
            }
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((maxValue + minValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${numToPr(answerNumber) }?`;
        }
    }
})


document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        let phraseRandom1 = Math.round( Math.random()*3);
        switch (phraseRandom1){
            case 0:
                answerField.innerText = `Я всегда угадываю!\n\u{1F603}` + numToPr(answerNumber);  
                break;
            case 1:
                answerField.innerText = `Я молодец!\n\u{1F607}`+ numToPr(answerNumber);
                break;
            case 2:
                answerField.innerText = `Не усложняй!\n\u{1F605}`+ numToPr(answerNumber);
                break;
            case 3:
                answerField.innerText = `Я нашел!\n\u{1F610}`+ numToPr(answerNumber);
                break;
        }
    }
})




function numToPr(number){

    positiveNumber = true;
    if (number < 0){
        positiveNumber = false;
        number = parseInt(number * (-1));
    }
    const
        h = ['сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'],
        t = ['', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'],
        o = ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'],
        p = ['одиннацать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
    let str = number.toString(), out = '';

    if(str.length == 1) {
        if (str == '0') {
            return 'ноль';
        } else if (positiveNumber == false){
            return 'минус ' + o[number-1];
        } else{
            return o[number-1];
        }
        
    }
    else if(str.length == 2){
        if(str[0] == 1) out = p[parseInt(str[1])-1];
        else out = (t[parseInt(str[0])-1] + ((str[1]!='0')?(' ' + o[parseInt(str[1])-1]):''));
    }
    else if(str.length == 3){
        out = (h[parseInt(str[0])-1] + ((str[1]!='0')?(' ' + t[parseInt(str[1])-1]):'') + ((str[2]!='0')?(' ' + o[parseInt(str[2])-1]):''));
    }

    let arr = out.split('');
    arr[0] = arr[0].toUpperCase();
    out = arr.join('');
    if(out.length < 20){
        if (positiveNumber == false){
            return 'минус ' + out;
        } else {
            return out;
        }
    } else{
        return number;
    }
}




