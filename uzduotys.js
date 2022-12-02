// 1. Palyginti du skaičius a ir b.Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10.(5 taškai)
// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10.(5 taškai)
// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5.(7 taškai)
// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
// 8. Parašyti funkciją - lygineSuma.Funkcijos parametrai - du kintamieji.Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
// Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą.Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
// 9. Parašyti funkciją pirminisSkaicius.Funkcija turi vieną kintamąjį.Turi būti patikrinimas, kad kintamasis yra skaičius.Funkcija turi grąžinti ar pateiktas skaičius yra pirminis(pirminis
// skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.)(10 taškų)
// 10. Parašyti funkciją telefonoNumeris.Funkcija turi priimti vieną kintamąjį - masyvą.Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu -
//     "(XXX) XXX-XXXX". (10 taškų)

console.log('-------- Užd. Nr. 1------------');
// 1. Palyginti du skaičius a ir b.Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
const a = 4;
const b = 5;
if (a === b) {
    console.log('a ir b lygūs');
} else if (a > b) {
    console.log('a daugiau už b');
} else if (a < b) {
    console.log('b daugiau už a');
}



console.log('-------- Užd. Nr. 2 -----------');
// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10.(5 taškai)
for (let i = 1; i <= 10; i++) {
    console.log(i);
}



console.log('-------- Užd. Nr. 3 -----------');
// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10.(5 taškai)
for (let i = 0; i <= 10; i = i + 2) {
    console.log(i);
}



console.log('-------- Užd. Nr. 4 -----------');
// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
for (let i = 0; i < 5; i++) {
    console.log(rand(1, 10));
}



console.log('-------- Užd. Nr. 5 -----------');
// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5.(7 taškai)
let numb = 0;
while (numb !== 5) {
    numb = Math.floor((Math.random() * 10) + 1);
    console.log(numb);
}



console.log('-------- Užd. Nr. 6 -----------');
// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią
// masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
let masyvas = [];
let didz = 0;
for (let i = 0; i < rand(20, 30); i++) {
    masyvas[i] = rand(10, 30);
    if (didz <= masyvas[i]) {
        didz = masyvas[i];
    }
}
console.log(masyvas);
console.log(didz);



console.log('-------- Užd. Nr. 7 -----------');
// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
let raidziuMasyvas = [];
let kiekA = 0;
let kiekB = 0;
let kiekC = 0;
let kiekD = 0;
function randLetter() {
    const raides = 'ABCD';
    return raides[Math.floor(Math.random() * raides.length)];
}
for (let i = 0; i < 100; i++) {
    raidziuMasyvas[i] = randLetter();
    if (raidziuMasyvas[i] === 'A') {
        kiekA++;
    } else if (raidziuMasyvas[i] === 'B') {
        kiekB++;
    } else if (raidziuMasyvas[i] === 'C') {
        kiekC++;
    } else {
        kiekD++;
    }
}
console.log(raidziuMasyvas);
console.log('A raidės: ' + kiekA);
console.log('B raidės: ' + kiekB);
console.log('C raidės: ' + kiekC);
console.log('D raidės: ' + kiekD);



console.log('-------- Užd. Nr. 8 -----------');
// 8. Parašyti funkciją - lygineSuma.Funkcijos parametrai - du kintamieji.Testų reikalavimai - abu kitamieji turi būti
// arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
// Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą.Jei abu
// kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
function lygineSuma(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        let skaiciuSuma = a + b;
        if (skaiciuSuma % 2 === 0) {
            return skaiciuSuma;
        } else {
            return 'Skaičių suma nelyginė';
        }
    } else if (a.constructor === Array && b.constructor === Array) {
        let masyvuSuma = a.length + b.length;
        if (masyvuSuma % 2 === 0) {
            return masyvuSuma;
        } else {
            return 'Masyvų suma nelyginė';
        }
    } else {
        return 'Abu kintamieji turi būti arba skaičiai arba masyvai';
    }
}
console.log(lygineSuma([1, 2, 3], [1, 2]));



console.log('-------- Užd. Nr. 9 -----------');
// 9. Parašyti funkciją pirminisSkaicius.Funkcija turi vieną kintamąjį.Turi būti patikrinimas, kad kintamasis
// yra skaičius.Funkcija turi grąžinti ar pateiktas skaičius yra pirminis(pirminis skaičius yra tas,
// kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.)(10 taškų)
function pirminisSkaicius(a) {
    let d = 0;
    if (typeof a === 'number') {
        for (let i = 1; i <= a; i++) {
            if (Number.isInteger(a / i)) {
                d++;
            }
        }
        if (d === 2) {
            return 'Skaičius yra pirminis';
        } else {
            return 'Skaičius nėra pirminis';
        }
    } else {
        return 'Kintamasis turi būti skaičius';
    }
}
console.log(pirminisSkaicius(7));



console.log('-------- Užd. Nr. 10 -----------');
// 10. Parašyti funkciją telefonoNumeris.Funkcija turi priimti vieną kintamąjį - masyvą.
// Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu -
// "(XXX) XXX-XXXX". (10 taškų)
function telefonoNumeris(f) {
    if (f.constructor === Array) {
        return '(' + f[0] + f[1] + f[2] + ') ' + f[3] + f[4] + f[5] + '-' + f[6] + f[7] + f[8] + f[9];
    } else {
        return 'Kintamasis turi būti masyvas';
    }
}
let g = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(telefonoNumeris(g));