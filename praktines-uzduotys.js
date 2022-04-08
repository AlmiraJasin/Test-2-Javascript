// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
console.log('1.-----------');


function skaiciuPalyginimas(num1, num2) {
    if (num1 > num2) {
        return `${num1} daugiau uz ${num2}`;
    } else if (num1 < num2) {
        return `${num1} maziau uz ${num2}`;
    } else {
        return `${num1} lygus ${num2}`;
    }
}

console.log(skaiciuPalyginimas(12, 11));

// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
console.log('2.-----------');

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
console.log('3.-----------');

for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
console.log('4.-----------');

function rand (min, max) {
    return Math.floor(Math.random () * (max - min + 1) + min);  
}

for(let i = 0; i < 5; i++){
    console.log(rand(1, 10))
}

// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
console.log('5.-----------');

const lastNumber = 5;
let randomNumber = rand(1, 10);
while (randomNumber !== lastNumber) {
    console.log(randomNumber);
    randomNumber = rand(1, 10);
}

console.log(randomNumber);

/* 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. 
Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
*/
console.log('6.-----------');


let largestNumber = 0
const arr = [];
const maxLength = rand(20, 30)
for (let i = 0; i < maxLength; i++) {
    let randomArrValues = rand(10, 30);
    arr.push(randomArrValues);
}

console.log(arr);

function largestNumberInArr(array) {  
    for (let i = 0; i < array.length; i++) {
        if (array[i] > largestNumber) {
            largestNumber = array[i];
        }
    }
    return largestNumber;
}

console.log(largestNumberInArr(arr));

/* 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. 
Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
*/
console.log('7.-----------');

// Sugeneruoti masyva:
    // 1 sukurti mini masyva [A, B, C, D]
    // 2 Priskirti masyvo reiksmems numeri    
    // 3 Padaryti length 100
    // 4 Priskirti numeriams random funkcija

const arrayValues = ['A', 'B', 'C', 'D'];
const letterArray = [];
const arrayItems = 100;
for (let i = 0; i < arrayItems; i++) {
    let itemNumber = rand(0, arrayValues.length - 1)
    letterArray.push(arrayValues[itemNumber]);
}
    
console.log(letterArray);

// Rasti kiek yra kiekvienos raidės
    // 5 Priskirti kiekvienai raidei kaupikli
    // 6 Palyginti kaupiklio reiksme su raide

let kaupiklis = new Array(arrayValues.length).fill(0);
for (let n = 0; n < letterArray.length; n++) {
    for (let i = 0; i < arrayValues.length; i++) {
     if (letterArray[n] === arrayValues[i]) {
        kaupiklis[i] += 1;
        break;
      }
    } 
// console.log(`${arrayValues[i]} raide masyve kartojama $n kartu`);   
}
// 
console.log(kaupiklis)


/* 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. 
Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. 
Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
*/
console.log('8.-----------');



/* 9. Parašyti funkciją pirminisSkaicius. 
Funkcija turi vieną kintamąjį. 
Turi būti patikrinimas, kad kintamasis yra skaičius. 
Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
*/
console.log('9.-----------');

function pirminisSkaicius(numToCheck) {
    if (typeof numToCheck !== 'number'
        || !isFinite(numToCheck)) {
        return 'ERROR';
    } 

    for (let i = 1; i < numToCheck; i++) {
        if (numToCheck % i === 0) {
            if (numToCheck % 1 === 0 && numToCheck % numToCheck === 0) {
                return 'Pirminis skaicius';
            }  
        }

    }
}

console.log(pirminisSkaicius(8));


/* 10. Parašyti funkciją telefonoNumeris. 
Funkcija turi priimti vieną kintamąjį - masyvą. 
Masyvo elementai - skaičiai, ilgis - 10. 
Funkcija turi grąžinti telefono numerį tokiu formatu - 
"(XXX) XXX-XXXX". (10 taškų)
*/
console.log('10.-----------');

const vartotojoNumeris = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

function telefonoNumeris(Skaiciai) {
    let formatas = '(XXX) XXX-XXXX';
    for (let i = 0; i <= vartotojoNumeris.length; i++) {
        formatas = formatas.replace('X', Skaiciai[i])
    }
    return formatas;
}

console.log(telefonoNumeris(vartotojoNumeris));


