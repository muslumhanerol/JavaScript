//wHİLE döngüsü

// Koşul doğru olduğu sürece kod çalışır.
//1 10 arası sayıları yazdırdık.
// let a=1;
// while (a <= 10) { 
//     console.log(a);
//     a++;
// }
//-------------------------------------------

//1 le 10 arası çift sayıları yazdır.
// let i=2;
// while (i<=10) {
//     console.log(i);
//     i=i+2;

// }


//1 le 10 arası çift sayıları yazdır.mod ile
// let i=1;
// while (i<=10) {
//     if (i % 2 == 0){ //i nin 2 ye bölümünden kalan 0 mı sorusu sorduk.
//         console.log(i);
//     }    
//     i++;
// }
//---------------------------------------------------------

//1 ile 50 arasındaki 4 ün katı olan sayıların adetini bul.
// let i =1;
// let sayac = 0;

// while (i < 50) {
//     if(i % 4 == 0){
//         sayac++;
//     }
//     i++;
// }
// console.log(sayac);
//------------------------------------------------------------------

//FOR
//1 le 10 arası sayıları yaz

// for (let i = 0; i<=10; i++){ //let i = 0;=döngü degeri.
//     console.log(i);          //i<=10; = döngünün koşulu.
// }                            //i++ = 1 artırır.   

//-----
//1 le prompt tan alınan sayı aralığını yazar.
// let count = Number(prompt("Lütfen bir sayı giriniz"))
// for (let i = 1; i <= count; i++) {
//     console.log(i);    
// }

//-----

//1 le 10 arası çift sayıları yaz.
// for (let i = 1; i <= 10; i++) {
//     if(i%2==0)
//     console.log(i);    
// }

//-----
// 1 le 10 arası tek sayıları yazdır.
//  for (let i = 1; i <= 10; i++) {
//      if(i%2==1) //kalan 1 se tek sayıdır.
//      console.log(i);    
//  }

 //farklı bir yol

//  for (let i = 1; i <= 10; i ++) {
//     if (i % 2 == 0){
//         console.log(++i);
//     }
// }

// ---------------------------

//CONTINUE= i 2 ye bölündüğünde kalan 0 sa döngüye devam et demek
// for (let i = 1; i <= 10; i ++) {
//     if (i % 2 == 0){
//         continue; //çift sayıysa devam edecek, değilse aşağıya inecek.
//     }
//     console.log(++i);
// }

// ---------------------------
//Kullanıcıdan istediği kadar sayı girevilecei ve girilen sayıların toplandığı kod.

// let total = 0;
// let num;
// for(let i = 0; i==0; ){
//     num = prompt("Lütfen bir sayı giriniz.");
//     if(num.toLocaleLowerCase() == "exit") { //döngüden çıkmak için exit yazmalı.
//         break;
//     }
//     total += Number(num);    
// }
// console.log(total);

// ---------------------------

//1-20 arası sayıları  tek, çift, tek, çift şeklinde yazdırın.

for(let i = 1; i <= 20; i++){
    if(i % 2 == 0){
        console.log(i + " - Çift Sayı");
    }else{
        console.log(i + " - Tek sayı");
    }    
}
console.log(total);


